import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';

const serviceIcons = {
  police: L.icon({
    iconUrl: './police_symbol.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  }),
  hospital: L.icon({
    iconUrl: './hospital_symbol.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  }),
  ngo: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  }),
  fire: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  })
};

const getServiceDetails = async (element) => {
  try {
    // Try to get more details from Nominatim (OpenStreetMap's geocoding service)
    const nominatimResponse = await axios.get(
      `https://nominatim.openstreetmap.org/lookup?osm_ids=N${element.id}&format=json&addressdetails=1`
    );
    
    if (nominatimResponse.data && nominatimResponse.data.length > 0) {
      return nominatimResponse.data[0];
    }
  } catch (error) {
    console.error('Error fetching details from Nominatim:', error);
  }
  return null;
};

const getWikipediaSummary = async (name, lat, lon) => {
  try {
    const response = await axios.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`,
      { params: { coords: `${lat}|${lon}` } }
    );
    return response.data.extract;
  } catch (error) {
    return null;
  }
};

export default function EmergencyServicesLayer() {
  const map = useMap();

  useEffect(() => {
    const fetchEmergencyServices = async () => {
      const bounds = map.getBounds();
      const { lat: minLat, lng: minLng } = bounds.getSouthWest();
      const { lat: maxLat, lng: maxLng } = bounds.getNorthEast();

      const overpassQuery = `[out:json];
        (
          node["amenity"="police"](${minLat},${minLng},${maxLat},${maxLng});
          node["amenity"="hospital"](${minLat},${minLng},${maxLat},${maxLng});
          node["amenity"="doctors"](${minLat},${minLng},${maxLat},${maxLng});
          node["office"="ngo"](${minLat},${minLng},${maxLat},${maxLng});
          node["amenity"="social_facility"](${minLat},${minLng},${maxLat},${maxLng});
          node["emergency"="fire_hydrant"](${minLat},${minLng},${maxLat},${maxLng});
          node["amenity"="fire_station"](${minLat},${minLng},${maxLat},${maxLng});
        );
        out body;
        >;
        out skel qt;`;

      try {
        const response = await axios.get(
          `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`
        );

        for (const element of response.data.elements) {
          if (element.type === 'node' && element.lat && element.lon) {
            let iconType = 'ngo';
            let serviceType = 'NGO/Support Service';

            if (element.tags?.amenity === 'police') {
              iconType = 'police';
              serviceType = 'Police Station';
            } else if (element.tags?.amenity === 'hospital' || element.tags?.amenity === 'doctors') {
              iconType = 'hospital';
              serviceType = element.tags?.amenity === 'doctors' ? 'Medical Clinic' : 'Hospital';
            } else if (element.tags?.amenity === 'fire_station' || element.tags?.emergency === 'fire_hydrant') {
              iconType = 'fire';
              serviceType = 'Fire Station/Hydrant';
            }

            const marker = L.marker([element.lat, element.lon], {
              icon: serviceIcons[iconType]
            }).addTo(map);

            const name = element.tags?.name || 'Unnamed Service';
            const address = element.tags?.['addr:full'] || element.tags?.['addr:street'] || 'Address not available';
            const phone = element.tags?.phone || 'Phone not available';
            const website = element.tags?.website || null;
            const openingHours = element.tags?.['opening_hours'] || 'Not specified';

            // Get additional details
            const details = await getServiceDetails(element);
            const wikipediaSummary = name !== 'Unnamed Service' 
              ? await getWikipediaSummary(name, element.lat, element.lon) 
              : null;

            marker.bindPopup(`
              <div class="font-sans max-w-xs">
                <h3 class="font-bold text-lg mb-2">${name}</h3>
                <div class="grid grid-cols-2 gap-2 mb-3">
                  <div>
                    <p class="text-sm"><b>Type:</b> ${serviceType}</p>
                    <p class="text-sm"><b>Address:</b> ${address}</p>
                    <p class="text-sm"><b>Contact:</b> ${phone}</p>
                  </div>
                  <div>
                    <p class="text-sm"><b>Opening Hours:</b> ${openingHours}</p>
                    ${website ? `<p class="text-sm"><b>Website:</b> <a href="${website}" target="_blank" class="text-blue-600">Visit</a></p>` : ''}
                  </div>
                </div>
                
                ${details?.address?.city ? `<p class="text-sm"><b>City:</b> ${details.address.city}</p>` : ''}
                ${details?.address?.postcode ? `<p class="text-sm"><b>Postal Code:</b> ${details.address.postcode}</p>` : ''}
                
                ${wikipediaSummary ? `
                <div class="mt-2 p-2 bg-gray-100 rounded">
                  <h4 class="font-semibold text-sm mb-1">About this place:</h4>
                  <p class="text-xs">${wikipediaSummary}</p>
                </div>
                ` : ''}
                
                <div class="mt-3 flex justify-between">
                  <a href="https://www.google.com/maps/dir/?api=1&destination=${element.lat},${element.lon}" 
                     target="_blank" 
                     class="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                    Get Directions
                  </a>
                  <a href="https://www.openstreetmap.org/node/${element.id}" 
                     target="_blank" 
                     class="text-xs bg-gray-500 text-white px-2 py-1 rounded">
                    More Details
                  </a>
                </div>
              </div>
            `);
          }
        }
      } catch (error) {
        console.error('Error fetching emergency services:', error);
      }
    };

    // Initial load
    fetchEmergencyServices();

    // Refresh when map moves
    map.on('moveend', fetchEmergencyServices);

    return () => {
      map.off('moveend', fetchEmergencyServices);
    };
  }, [map]);

  return null;
}