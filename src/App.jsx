import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//main class files
// import Hello from "./components/helloWorld";
// import FirstComponent from "./components/firstComponent";
// import Fruit from "./components/classOne";
// import Parent from "./components/propsChildren";
// import ClassResult from "./components/conditionalRendering";
// import LogicalAND from "./components/logicalAND";
// import Destructuring1 from "./components/destructuring1";
// import Destructuring2 from "./components/destructuring2";
// import Parent1 from "./components/propDrilling";
// import HtmlForms from "./components/htmlForms";
// import ControlledForm from "./components/controlledForm";
// import TwoWayBinding from "./components/twoWayBinding";
// import Formvalidation from "./components/formValidation";
// import Example from "./components/hooks";
// import Counter from "./components/counter";
// import Cleanup from "./components/cleanup";
// import UserList from "./components/userList";
// import Temperature from "./components/css";
// import External from "./components/external";
// import Button from "./components/button";
// import ProductCard from "./components/productCard";
import Index from "./components/index";
import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";

//Assignments
// import ShopApp from "./Assignments/shopApp";

function App() {
  return (
    <div className="App">
      <h1>This is a app file</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {/* Class work */}
      {/* <FirstComponent name="Gagan" />
      <FirstComponent name="Singh" />
      <FirstComponent name="Yadav" />
      <Fruit />
      <Parent />
      <ClassResult isresult={false} />
      <LogicalAND brand="Ford" />
      <Destructuring1 color="Red" />
      <Destructuring2 brand="Ford" model="Mustang" />
      <Parent1 studentName="Gagan" />
      <HtmlForms />
      <ControlledForm />
      <TwoWayBinding />
      <Formvalidation />
      <Example />
      <Counter />
      <Cleanup />
      <UserList />
      <Temperature value={35} /> */}
      {/* <External />
      <Button />
      <ProductCard /> */}

      {/* Assignments */}
      {/* <ShopApp /> */}
    </div>
  );
}

export default App;
