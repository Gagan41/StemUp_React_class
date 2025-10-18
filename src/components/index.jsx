import React from "react";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div>
      <h1>This is a index page</h1>
      <nav>
        <Link to="/home">Home Page ||</Link>
        <Link to="/about">About Us ||</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>
  );
}

export default Index;
