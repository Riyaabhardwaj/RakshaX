import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import EmergencyServicesLayer from './EmergencyServicesLayer';
import LoadingSpinner from './LoadingSpinner';

// Fix for default marker icons in Leaflet with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: './user_location.png',
  iconUrl: './user_location2.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const [bbox, setBbox] = useState([]);
  const map = useMap();

  useEffect(() => {
    map.locate({
      setView: true,
      maxZoom: 16,
      timeout: 10000
    });

    map.on('locationfound', function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      setBbox(e.bounds.toBBoxString().split(','));
    });

    map.on('locationerror', function (e) {
      console.error(e.message);
      // Default to a known location if geolocation fails
      const defaultPosition = [28.6139, 77.2090]; // London coordinates
      setPosition(defaultPosition);
      map.flyTo(defaultPosition, 13);
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        You are here. <br />
        Map bbox: <br />
        <b>Southwest lng</b>: {bbox[0]} <br />
        <b>Southwest lat</b>: {bbox[1]} <br />
        <b>Northeast lng</b>: {bbox[2]} <br />
        <b>Northeast lat</b>: {bbox[3]}
      </Popup>
    </Marker>
  );
}
export default function Map() {

  const [mapLoaded, setMapLoaded] = useState(false);
  const [servicesLoading, setServicesLoading] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  if (!mapLoaded) {
    return <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
      Loading map...
    </div>;
  }

  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden shadow-lg border border-gray-300 relative">
      {servicesLoading && <LoadingSpinner />}
      <div className="h-[600px] w-full rounded-lg overflow-hidden shadow-lg border border-gray-300 relative">
        <div className="absolute top-2 left-2 z-[1000] bg-white p-2 rounded shadow-md">
          <h3 className="font-bold mb-1">Emergency Services Legend</h3>
          <div className="flex items-center mb-1">
            <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png" width="20" className="mr-2" />
            <span className="text-sm">Police Stations</span>
          </div>
          <div className="flex items-center mb-1">
            <img src="/hospital_symbol.png" width="20" className="mr-2" />
            <span className="text-sm">Hospitals/Clinics</span>
          </div>
          <div className="flex items-center mb-1">
            <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png" width="20" className="mr-2" />
            <span className="text-sm">NGOs/Support</span>
          </div>
          <div className="flex items-center">
            <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png" width="20" className="mr-2" />
            <span className="text-sm">Fire Services</span>
          </div>
        </div>

        <MapContainer
          center={[28.6139, 77.2090]} // New Delhi coordinates
          zoom={14} // Slightly more zoomed in for better detail
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
          <EmergencyServicesLayer />
        </MapContainer>
      </div>
    </div>
  );
}