export default function Home() {
  return (
    <div style={{ padding: "50px", fontFamily: "sans-serif", textAlign: "center", backgroundColor: "#0f172a", color: "#f8fafc", minHeight: "100vh" }}>
      <h1 style={{ color: "#38bdf8" }}>Robot Scraper SEO Game Aktif! 🚀</h1>
      <p style={{ color: "#94a3b8" }}>Sistem otomatisasi pemindaian event game Anda di Vercel sudah berjalan sukses.</p>
      <div style={{ marginTop: "30px", padding: "20px", background: "#1e293b", display: "inline-block", borderRadius: "8px" }}>
        <p>Buka halaman ini untuk melihat data hasil memindai:</p>
        <a href="/api/cron" style={{ color: "#38bdf8", fontWeight: "bold", textDecoration: "none" }}>👉 Klik di Sini: /api/cron 👈</a>
      </div>
    </div>
  );
}