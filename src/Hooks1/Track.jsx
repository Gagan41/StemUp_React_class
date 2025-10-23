import { useRef, useState, useEffect } from "react";

function Track() {
  const [inputValue, setInputValue] = useState("");
  const prevInputValue = useRef("");

  useEffect(() => {
    prevInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
    <br />
      <input
        type="text"
        value={inputValue}
        onChange={(r) => setInputValue(r.target.value)}
      />
      <h2>Current value :{inputValue}</h2>
      <h2>Previous VAlue :{prevInputValue.current}</h2>
    </>
  );
}
export default Track;
