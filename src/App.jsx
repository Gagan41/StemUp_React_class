import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { lazy, Suspense } from "react";

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

//routing1
//import Index from "./components/index";
// import Home from "./components/home";
// import Contact from "./components/contact";
// import About from "./components/about";
// import NavLink1 from "./components/navLink";

//routing2
//import User from "./routing2/user";

//Hooks1 context API
import Component1 from "./Hooks1/Context";
import Ref from "./Hooks1/Ref";
import AcessingDom from "./Hooks1/AcessingDom";
import Track from "./Hooks1/track";
import Battery from "./Hooks1/Battery";

//Assignments
// import ShopApp from "./Assignments/shopApp";

// const Home = lazy(() => import("./components/home"));
// const About = lazy(() => import("./components/about"));
// const Contact = lazy(() => import("./components/contact"));

function App() {
  return (
    <div className="App">
      {/* Context API - Hooks1*/}
      <Component1 />
      <Ref />
      <AcessingDom />
      <Track />
      <Battery />

      {/* <h1>This is a app file</h1>
      <Suspense fallback={<h3>Loading......</h3>}>
        <BrowserRouter>
          <Routes>
             <NavLink1 /> 
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users/:id" element={<User />} />
          </Routes>
        </BrowserRouter>
      </Suspense> */}

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
