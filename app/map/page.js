"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const Map = dynamic(() => import("./map"), { ssr: false });

export default function MapPage() {
  return <Map />;
}
