"use client";

import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import { useState } from "react";

function ClickHandler({ onClick }) {
  useMapEvents({
    click(e) {
      onClick(e.latlng);
    }
  });
  return null;
}

export default function Map() {
  const [location, setLocation] = useState(null);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ClickHandler onClick={setLocation} />
      </MapContainer>

      {location && (
        <div style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          background: "#020617",
          color: "white",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0 0 10px black"
        }}>
          <p>📍 Latitude: {location.lat.toFixed(4)}</p>
          <p>📍 Longitude: {location.lng.toFixed(4)}</p>
        </div>
      )}
    </div>
  );
}

