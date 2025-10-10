import React from "react";

function Parent({ studentName }) {
  return (
    <div style={{ background: "rgba(48, 169, 169, 0.27)", margin: "10px", padding: "10px" }}>
      <h2>Parent component</h2>
      <Child studentName={studentName} />
    </div>
  );
}

function Child({ studentName }) {
  return (
    <div style={{ background: "#6f5f4", margin: "10px", padding: "10px" }}>
      <h2>Child component</h2>
      <GrandChild studentName={studentName} />
    </div>
  );
}

function GrandChild({ studentName }) {
  return (
    <div style={{ background: "#6e654", margin: "10px", padding: "10px" }}>
      <h2>GrandChild component</h2>
      <GreatGrandChild studentName={studentName} />
    </div>
  );
}

function GreatGrandChild({ studentName }) {
  return (
    <div style={{ background: "#6e9f4", margin: "10px", padding: "10px" }}>
      <h2>GreatGrandChild component</h2>
      <p>
        ✌️Hello <b>{studentName}</b>, this value was passed from the App component
        through 3 other componenets
      </p>
    </div>
  );
}

export default Parent;