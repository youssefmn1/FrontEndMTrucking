import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Assurez-vous que les styles Leaflet sont inclus

// Coordonnées pour EMSI Les Orangers
const initialPosition = [33.541497, -7.673547]; // Coordonnées pour EMSI Les Orangers
const markers = [
  { position: [33.541497, -7.673547], text: "EMSI Les Orangers" }, // Marqueur pour EMSI Les Orangers
];

export function Mapp() {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Map
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 h-[500px]"> {/* Définir la hauteur de la carte */}
          <MapContainer center={initialPosition} zoom={16} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker, index) => (
              <Marker key={index} position={marker.position}>
                <Popup>{marker.text}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </CardBody>
      </Card>
    </div>
  );
}

export default Mapp;
