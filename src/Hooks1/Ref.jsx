import { useState, useRef, useEffect } from "react";

function Ref() {
  const [inputvalue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <>
      <p>Type in the input field</p>
      <input
        type="text"
        value={inputvalue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render count :{count.current}</h1>
    </>
  );
}

export default Ref;
