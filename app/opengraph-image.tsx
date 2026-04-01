import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Patriot Roofing & Home Repair - Trusted Roofing Contractor in North Carolina";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #162a4a 50%, #0a1628 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Red accent bar at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#c41e2a",
          }}
        />

        {/* Star decoration */}
        <div
          style={{
            fontSize: "280px",
            color: "rgba(255,255,255,0.03)",
            position: "absolute",
            right: "40px",
            top: "-40px",
            lineHeight: 1,
          }}
        >
          ★
        </div>

        {/* Company name */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.15,
            marginBottom: "16px",
          }}
        >
          Patriot Roofing
        </div>
        <div
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          & Home Repair
        </div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#c41e2a",
            borderRadius: "2px",
            marginBottom: "32px",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            maxWidth: "600px",
          }}
        >
          Trusted Roofing Contractor in Lexington, NC
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "18px" }}>
            Licensed & Insured
          </div>
          <div style={{ color: "#c41e2a", fontSize: "18px" }}>★</div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "18px" }}>
            5-Star Rated
          </div>
          <div style={{ color: "#c41e2a", fontSize: "18px" }}>★</div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "18px" }}>
            Free Estimates
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
