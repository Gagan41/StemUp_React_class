import "./App.css";
//import Hello from "./helloworld";
import FirstComponent from "./firstComponent";
import Fruit from "./classOne";
import Parent from "./propsChildren";

function App() {
  return (
    <div className="App">
      <FirstComponent name="Gagan" />
      {/* <FirstComponent name="Singh" />
      <FirstComponent name="Yadav" /> */}
      <Fruit />
      <Parent />
    </div>
  );
}

export default App;
