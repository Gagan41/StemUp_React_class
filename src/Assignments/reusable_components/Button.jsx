import React from "react";

function Button({
  text,
  onClick,
  type = "button",
  style,
  children,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "10px 16px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        ...style,
      }}
    >
      {children || text}
    </button>
  );
}

export default Button;