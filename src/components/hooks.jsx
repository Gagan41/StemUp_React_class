import { useEffect } from "react";

function Example() {
  useEffect(() => {
    console.log("component rendered or updated");
  });

  return <h2>Hello React useEffect!</h2>;
}

export default Example;
