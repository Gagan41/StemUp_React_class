import React from "react";

function Pass() {
  return <h1>Congrulations</h1>;
}

function Fail() {
  return <h1>Better luck next time</h1>;
}

function ClassResult(props) {
  const isresult = props.isresult;
  console.log(isresult);
  //conditional rendering using if/else
  // if (isresult) {
  //   return <Pass />;
  // } else return <Fail />;

  //conditional rendering using ternary operators
  return isresult ? <Pass /> : <Fail />;
}

export default ClassResult;
