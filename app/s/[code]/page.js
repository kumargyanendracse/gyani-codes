"use client";
import { useEffect } from "react";

export default function Redirect({ params }) {
  useEffect(() => {
    const links = JSON.parse(localStorage.getItem("links") || "[]");
    const match = links.find(l => l.code === params.code);

    if (match) {
      window.location.href = match.url;
    } else {
      alert("Link not found");
    }
  }, []);

  return <p style={{ padding: "40px" }}>Redirecting...</p>;
}
