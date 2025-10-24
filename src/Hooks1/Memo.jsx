import { useState, useMemo } from "react";

function Memo() {
  const [count, setcount] = useState(0);

  function slowCalculation(num) {
    console.log("running slow calculation");
    for (let i = 0; i < 1000000000; i++) {;}
    return num * 2;
  }

  const result = useMemo(() => slowCalculation(count), [count]);
  console.log(count);

  return (
    <div>
      <h3>slow result:{result}</h3>
      <button onClick={() => setcount(count + 1)}>Increment</button>
    </div>
  );
}
export default Memo;
