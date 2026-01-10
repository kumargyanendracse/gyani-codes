export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      padding: "60px",
      fontFamily: "system-ui"
    }}>
      <section style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
          Hi, I’m <span style={{ color: "#38bdf8" }}>Gyanendra</span> 👋
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#cbd5f5" }}>
          Go Backend Engineer • System Design • AI Builder
        </p>

        <p style={{ marginTop: "20px", color: "#94a3b8" }}>
          I build scalable backend systems, financial platforms and AI-powered tools.
          Currently working on high-scale loan and fund disbursement systems.
        </p>

        <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
          <a
            href="https://github.com/kumargyanendracse"
            target="_blank"
            style={{
              padding: "12px 20px",
              background: "#38bdf8",
              color: "#0f172a",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            GitHub
          </a>

          <a
            href="mailto:kumargyanendracse@gmail.com@gmail.com"
            style={{
              padding: "12px 20px",
              border: "1px solid #38bdf8",
              borderRadius: "8px",
              color: "#38bdf8",
              textDecoration: "none"
            }}
          >
            Contact Me
          </a>
        </div>

        <h2 style={{ marginTop: "60px", fontSize: "2rem" }}>🚀 Projects</h2>

        <div style={{ marginTop: "20px", display: "grid", gap: "20px" }}>
              <div style={cardStyle}>
  <h3>URL Shortener</h3>
  <p>
    A Bit.ly–style URL shortener where users can create short links that redirect
    to long URLs. Built with Next.js and client-side storage, designed to later
    move to a Go backend.
  </p>
  <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
    <a
      href="/short"
      style={{
        padding: "8px 14px",
        background: "#38bdf8",
        color: "#0f172a",
        borderRadius: "6px",
        textDecoration: "none",
        fontWeight: "bold"
      }}
    >
      Live Demo
    </a>
    <a
      href="https://github.com/kumargyanendracse/gyani-codes"
      target="_blank"
      style={{
        padding: "8px 14px",
        border: "1px solid #38bdf8",
        borderRadius: "6px",
        color: "#38bdf8",
        textDecoration: "none"
      }}
    >
      Source Code
    </a>
  </div>
</div>

          <div style={cardStyle}>
            <h3>Gyani11 – Fantasy Sports App</h3>
            <p>A Dream11-like platform built using Go backend with contests, teams, and scoring logic.</p>
          </div>

          <div style={cardStyle}>
            <h3>Loan & Fund Disbursement System</h3>
            <p>Built APIs for loan origination, bureau checks, fund partners (Oxyzo, MAFS) and repayment tracking.</p>
          </div>

          <div style={cardStyle}>
            <h3>AI Interview Preparation Tool</h3>
            <p>An AI-powered tool to generate Go, DSA and System Design questions based on your experience.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

const cardStyle = {
  background: "#020617",
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid #1e293b"
};
