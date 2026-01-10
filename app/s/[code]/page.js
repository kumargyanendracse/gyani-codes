"use client";
import { useEffect } from "react";

export default function Redirect({ params }) {
  useEffect(() => {
    fetch(`https://gyani-shortener-api.onrender.com/resolve?code=${params.code}`)
      .then(res => res.json())
      .then(data => {
        if (data.url) {
          window.location.href = data.url;
        } else {
          alert("Link not found");
        }
      });
  }, []);

  return <p style={{ padding: "40px" }}>Redirecting...</p>;
}
