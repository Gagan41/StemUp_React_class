import { useRef } from "react";

function AcessingDom() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <br />
      <br />
      <button onClick={focusInput}>focus input</button>
      <br />
    </>
  );
}

export default AcessingDom;
