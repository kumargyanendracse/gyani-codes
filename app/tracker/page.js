"use client";
import { useState, useEffect } from "react";

export default function Tracker() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("jobs");
    if (saved) setJobs(JSON.parse(saved));
  }, []);

  function addJob() {
    const newJob = {
      company,
      role,
      status,
      date: new Date().toLocaleDateString()
    };

    const updated = [newJob, ...jobs];
    setJobs(updated);
    localStorage.setItem("jobs", JSON.stringify(updated));

    setCompany("");
    setRole("");
    setStatus("");
  }

  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1>📋 Job Application Tracker</h1>

      <input placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} style={input} />
      <input placeholder="Role" value={role} onChange={e => setRole(e.target.value)} style={input} />
      <input placeholder="Status (Applied / Interview / Offer)" value={status} onChange={e => setStatus(e.target.value)} style={input} />

      <button onClick={addJob} style={btn}>Add Job</button>

      <table style={{ width: "100%", marginTop: "30px" }}>
        <thead>
  <tr>
    <th>Company</th>
    <th>Role</th>
    <th>Status</th>
    <th>Date</th>
    <th>Action</th>
  </tr>
</thead>
       <tbody>
  {jobs.map((j, i) => (
    <tr key={i}>
      <td>{j.company}</td>
      <td>{j.role}</td>
      <td>
        <span style={{
          padding: "4px 10px",
          borderRadius: "12px",
          background:
            j.status === "Offer" ? "#16a34a" :
            j.status === "Interview" ? "#2563eb" :
            "#ca8a04",
          color: "white"
        }}>
          {j.status}
        </span>
      </td>
      <td>{j.date}</td>
      <td>
        <button
          onClick={() => {
            const updated = jobs.filter((_, idx) => idx !== i);
            setJobs(updated);
            localStorage.setItem("jobs", JSON.stringify(updated));
          }}
          style={{ background: "red", color: "white", border: "none", padding: "6px 10px", borderRadius: "6px" }}
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </main>
  );
}

const input = {
  width: "100%",
  padding: "10px",
  margin: "8px 0",
  borderRadius: "6px"
};

const btn = {
  padding: "10px 20px",
  background: "#38bdf8",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold"
};
