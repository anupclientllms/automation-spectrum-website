import React from "react";

function AIChatshoppieLogos({
  size = 64,
  className = "",
  showText = false,
}) {
  return (
    <div
      className={`aichat-logo-component ${className}`}
      style={{
        width: size,
        height: size,
        flex: `0 0 ${size}px`,
      }}
    >
      <img
        src="/aiclogo.png"
        alt="AIChatshoppie"
        className="aichat-logo-image"
      />

      {showText && (
        <span className="aichat-logo-label">
          AIChatshoppie
        </span>
      )}
    </div>
  );
}

export default AIChatshoppieLogos;