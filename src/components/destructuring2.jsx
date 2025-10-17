import React from "react";

function Destructuring2(props) {
  const { brand, model } = props;
  return (
    <div>
      <h2>
        I love my {brand} {model}!
      </h2>
    </div>
  );
}

export default Destructuring2;
