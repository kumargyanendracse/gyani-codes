"use client";
import { useState } from "react";

export default function Shortener() {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState([]);

  async function shorten() {
    if (!url) return;

    const res = await fetch("https://gyani-shortener-api.onrender.com/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url })
    });

    const data = await res.json();

    const newLink = {
      code: data.code,
      url
    };

    setLinks([newLink, ...links]);
    setUrl("");
  }

  return (
    <main style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>🔗 URL Shortener</h1>

      <input
        placeholder="Paste long URL"
        value={url}
        onChange={e => setUrl(e.target.value)}
        style={input}
      />

      <button onClick={shorten} style={btn}>
        Shorten
      </button>

      <div style={{ marginTop: "30px" }}>
        {links.map((l, i) => (
          <div key={i} style={card}>
            <p>
              <b>Short:</b>{" "}
              <a
                href={`/s/${l.code}`}
                target="_blank"
                style={{ color: "#38bdf8" }}
              >
                {window.location.origin}/s/{l.code}
              </a>
            </p>
            <p><b>Original:</b> {l.url}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

const input = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px"
};

const btn = {
  marginTop: "10px",
  padding: "10px 20px",
  background: "#38bdf8",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold"
};

const card = {
  background: "#020617",
  padding: "15px",
  borderRadius: "10px",
  marginTop: "15px",
  border: "1px solid #1e293b"
};
