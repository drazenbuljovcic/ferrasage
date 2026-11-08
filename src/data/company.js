// Company contact details used by the "Find us" section.
export const COMPANY = {
  name: "Ferrasage",
  addressLines: ["Science and Technology Park Novi Sad", "Novi Sad", "Serbia"],
  email: "office@ferrasage.com",
};

// Pin for the embedded Google map (from the Google Maps place link).
export const MAP = {
  query: "Science and Technology Park Novi Sad",
  lat: 45.2449251,
  lng: 19.8477155,
  zoom: 17,
};

export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(MAP.query)}&ll=${MAP.lat},${MAP.lng}&z=${MAP.zoom}&t=k&output=embed`;
