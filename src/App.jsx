import "./App.css";
//import Hello from "./helloworld";
// import FirstComponent from "./firstComponent";
// import Fruit from "./classOne";
// import Parent from "./propsChildren";
import ClassResult from "./conditionalRendering";
import LogicalAND from "./logicalAND";
import Destructuring1 from "./destructuring1";
import Destructuring2 from "./destructuring2";
import Parent from "./propDrilling";

function App() {
  return (
    <div className="App">
      {/* <FirstComponent name="Gagan" /> */}
      {/* <FirstComponent name="Singh" />
      <FirstComponent name="Yadav" /> */}
      {/* <Fruit />
      <Parent /> */}
      <ClassResult isresult={false}/>
      <LogicalAND brand="Ford"/>
      <Destructuring1 color="Red"/>
      <Destructuring2 brand="Ford" model="Mustang" />
      <Parent studentName="Gagan" />
    </div>
  );
}

export default App;
