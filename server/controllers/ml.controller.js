import axios from "axios";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

export const predictDisasters = asyncHandler(async (req, res, next) => {
    const { floodData, wildFireData } = req.body;
    const floodPromise = axios.post("http://localhost:5000/predict-flood", floodData)
        .then(res => ({ success: true, data: res.data }))
        .catch(() => ({ success: false, data: null }));

    const wildFirePromise = axios.post("http://localhost:5000/predict-wildfire", wildFireData)
        .then(res => ({ success: true, data: res.data }))
        .catch(() => ({ success: false, data: null }));
    const [floodResult, wildFireResult] = await Promise.all([floodPromise, wildFirePromise]);

    const responseData = {
        floodRes: floodResult.data,
        wildFireRes: wildFireResult.data
    };

    if (!floodResult.success && !wildFireResult.success) {
        return next(new ApiError(400, "All prediction models failed"));
    }

    const successMessages = [];
    if (floodResult.success) successMessages.push("flood");
    if (wildFireResult.success) successMessages.push("wildfire");

    const message = `Successful predictions for: ${successMessages.join(' and ')}` +
        (successMessages.length < 2 ? " (other model failed)" : "");

    res.status(200).json(new ApiResponse(200, responseData, message));
});