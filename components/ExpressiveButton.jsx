// A button that reacts with a soft ivory glow and midnight depth
import React from "react";

const ExpressiveButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 24px",
        backgroundColor: "#1A2238", // Midnight Blue
        color: "#FAF9F6", // Ivory
        border: "2px solid #C5A059", // Gold Accent
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "1rem",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 15px rgba(26, 34, 56, 0.4)",
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = "#FAF9F6";
        e.target.style.color = "#1A2238";
        e.target.style.transform = "translateY(-3px)";
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = "#1A2238";
        e.target.style.color = "#FAF9F6";
        e.target.style.transform = "translateY(0)";
      }}
    >
      {label}
    </button>
  );
};

export default ExpressiveButton;
