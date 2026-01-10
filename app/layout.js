export const metadata = {
  title: "gyani.codes",
  description: "Gyanendra Kumar — Go Backend Engineer & AI Builder"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0f172a", color: "white", fontFamily: "system-ui" }}>
        <nav style={{
          padding: "20px 40px",
          borderBottom: "1px solid #1e293b",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ fontWeight: "bold", fontSize: "20px" }}>
            gyani<span style={{ color: "#38bdf8" }}>.codes</span>
          </div>

         <div style={{ display: "flex", gap: "25px" }}>
  <a href="/" style={linkStyle}>Home</a>
  <a href="/projects" style={linkStyle}>Projects</a>
  <a href="/blog" style={linkStyle}>Blog</a>
  <a href="/tools" style={linkStyle}>Tools</a>
  <a href="/tracker" style={linkStyle}>Tracker</a>
</div>
        </nav>

        {children}
      </body>
    </html>
  );
}

const linkStyle = {
  color: "#cbd5f5",
  textDecoration: "none",
  fontSize: "16px"
};

