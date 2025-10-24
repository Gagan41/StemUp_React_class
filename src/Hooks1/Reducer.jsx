import { useReducer } from "react";

function Counter() {
  //defining reduce function
  function red(st, ac) {
    switch (ac.type) {
      case "INCREMENT":
        return { count: st.count + 1 };
      case "DECREMENT":
        return { count: st.count - 1 };
      case "RESET":
        return { count: 0 };
      case "TWOINC":
        return { count: st.count + 2 };
      default:
        return st;
    }
  }

  const [st, dispatch] = useReducer(red, { count: 0 });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count : {st.count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        + Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        - Decrement
      </button>
      <button onClick={() => dispatch({ type: "TWOINC" })}>
        Increment 2
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
export default Counter;
