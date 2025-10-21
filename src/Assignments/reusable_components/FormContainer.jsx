import React from "react";

 function FormContainer({ title, children }) {
  return (
    <div
      style={{
        width: "300px",
        margin: "60px auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        background: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{title}</h2>
      {children}
    </div>
  );
}

export default FormContainer;