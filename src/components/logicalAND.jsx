import React from "react";

function LogicalAND(props) {
  return <>{props.brand && <h1>My car is a {props.brand}!</h1>}</>;
}

export default LogicalAND;
