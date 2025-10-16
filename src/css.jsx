import React from "react";

const style = {
  backgroundColor: "lightblue",
  padding: "10px",
  borderRadius: "5px",
};
// function Greetings(){
//     return <h2  style={style}>Hello inline styling</h2>
// }

function Temperature({ value }) {
  return (
    <div>
      <h2 style={style}>Hello inline styling</h2>
      <p style={{ color: value > 30 ? "red" : "blue" }}>
        Tempearture :{value} ^C
      </p>
    </div>
  );
}

export default Temperature;
