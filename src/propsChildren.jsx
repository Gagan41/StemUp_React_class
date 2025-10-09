import React from "react";

function Parent() {
  return (
    <div>
      <h1>My two children</h1>
      <Son>
        <p>
          this is written in parent component, but displayed as a part of the
          sun component
        </p>
      </Son>
      <Daughter brand="Toyota" model="Corolla">
        <p>
          this is written in parent component, but displayed as a part of the
          daughter component
        </p>
      </Daughter>
    </div>
  );
}

function Son(props) {
  return (
    <div
      style={{
        border: "2px solid black",
        margin: "10px",
        padding: "10px",
        background: "lightgreen",
      }}
    >
      <h2>Son</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Daughter({ brand, model, children }) {
  return (
    <div
      style={{
        border: "2px solid blue",
        margin: "10px",
        padding: "10px",
        background: "lightpink",
      }}
    >
      <h2>Daughter {brand && `(${brand} ${model})`}</h2>
      <div>{children}</div>
    </div>
  );
}

export default Parent;
