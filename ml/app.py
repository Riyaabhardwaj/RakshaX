from fastapi import FastAPI, Request
import pickle
import pandas as pd
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model
from joblib import load

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load models
with open("flood.pkl", "rb") as f:
    flood_model = pickle.load(f)

wildfire_model = load_model("wildfire_lstm.h5")
wildfire_scaler = load("scaler.joblib")

@app.post("/predict-flood")
async def predict_flood(request: Request):
    """Endpoint for flood prediction"""
    data = await request.json()
    df = pd.DataFrame([data])
    
    # Flood model expects these features (adjust as needed):
    # ['Rainfall (mm)', 'Temperature (°C)', 'Humidity (%)', ...]
    flood_pred = flood_model.predict(df.values)
    
    return {"flood_risk": float(flood_pred[0])}

@app.post("/predict-wildfire")
async def predict_wildfire(request: Request):
    """Returns the highest risk class and its probability"""
    data = await request.json()
    records = data['records']
    
    # Preprocess input
    sequence = np.array([
        [r['latitude'], r['longitude'], r['brightness'],
         r['bright_t31'], r['frp'], r['daynight'], r['hour']]
        for r in records
    ])
    scaled_seq = wildfire_scaler.transform(sequence)
    lstm_input = scaled_seq.reshape(1, 7, 7)
    
    # Get predictions
    proba = wildfire_model.predict(lstm_input)[0]
    
    # Find the highest probability
    risk_classes = ["low", "medium", "high"]
    highest_index = np.argmax(proba)
    max_probability = float(np.max(proba))  # Explicitly get the max value
    
    return {
        "dominant_risk": risk_classes[highest_index],
        "probability": max_probability,
        "all_probabilities": {  # Optional: include all values for debugging
            "low": float(proba[0]),
            "medium": float(proba[1]),
            "high": float(proba[2])
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)