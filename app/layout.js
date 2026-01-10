export const metadata = {
  title: "gyani.codes",
  description: "Gyanendra Kumar — Go Backend Engineer & AI Builder"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#f8f9fa" }}>
        {children}
      </body>
    </html>
  );
}
