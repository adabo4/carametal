"use client";

export default function DebugEnv() {
  // Show in both development AND production for debugging
  // Remove this component after debugging is complete

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        background: "red",
        color: "white",
        padding: "10px",
        fontSize: "12px",
        zIndex: 9999,
      }}
    >
      <div>NODE_ENV: {process.env.NODE_ENV}</div>
      <div>
        UMAMI_SRC_PROD: {process.env.NEXT_PUBLIC_UMAMI_SRC_PROD || "undefined"}
      </div>
      <div>
        UMAMI_ID_PROD:{" "}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID_PROD || "undefined"}
      </div>
      <div>
        Script will load:{" "}
        {process.env.NODE_ENV === "production" &&
        process.env.NEXT_PUBLIC_UMAMI_SRC_PROD
          ? "YES"
          : "NO"}
      </div>
    </div>
  );
}
