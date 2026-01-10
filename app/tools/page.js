"use client";
import { useState } from "react";

export default function Tools() {
  const [experience, setExperience] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function generate() {
    setLoading(true);
    setResult("");

    const prompt = `
You are an interview coach.
Generate interview questions for:
Experience: ${experience}
Role: ${role}
Company: ${company}

Give:
- 5 Go questions
- 5 DSA questions
- 5 System Design questions
`;

    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    setResult(data.text);
    setLoading(false);
  }

  return (
    <main style={{ padding: "60px", maxWidth: "800px", margin: "auto" }}>
      <h1>🧠 AI Interview Question Generator</h1>

      <input
        placeholder="Experience (e.g. 2 years)"
        value={experience}
        onChange={e => setExperience(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Role (e.g. Backend Developer)"
        value={role}
        onChange={e => setRole(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Company (e.g. Amazon)"
        value={company}
        onChange={e => setCompany(e.target.value)}
        style={inputStyle}
      />

      <button onClick={generate} style={btnStyle}>
        {loading ? "Generating..." : "Generate Questions"}
      </button>

      <pre style={{ whiteSpace: "pre-wrap", marginTop: "30px" }}>
        {result}
      </pre>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "8px"
};

const btnStyle = {
  padding: "12px 20px",
  background: "#38bdf8",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold"
};
