import { useState, useEffect } from "react";

function Cleanup() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("timer cleared");
    };
  }, []);
  return <h2>time : {seconds}</h2>;
}

export default Cleanup;
