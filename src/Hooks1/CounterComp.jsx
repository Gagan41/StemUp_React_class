import UseCounter from './UseCounter'; 

function CounterComponent() {
  const { count, increment, decrement, reset } = UseCounter(10); // Start with 10

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterComponent;