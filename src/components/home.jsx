import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleLogin() {
    console.log("Home page button Clicked");
    navigate('/contact')
  }

  return (
    <div>
      <h1>This is a home page</h1>

      <button onClick={handleLogin}>click me</button>
    </div>
  );
}

export default Home;
