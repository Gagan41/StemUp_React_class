import React from "react";

function FirstComponent(props) {
  return (
    <div>
      <h1>First Component {props.name}</h1>
      <SecondComponent phno="123456789" />
    </div>
  );
}

function SecondComponent(props) {
  return <div>Second Component {props.phno}</div>;
}

export default FirstComponent;
