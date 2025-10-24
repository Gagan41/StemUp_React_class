import { useState, useCallback } from "react";

function Child({ onClick }) {
  console.log("child component re-rendred");
  return (
    <>
      <br />
      <button onClick={onClick}>Click me</button>
    </>
  );
}

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clecked!");
  }, []); //no dependecy -> same function always

  return (
    <div>
      <h3>count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <br />
      <Child onClick={handleClick} />
    </div>
  );
}
export default Parent;
