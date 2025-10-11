import { useState } from "react";

function ControlledForm() {
  const [ name, setName ] = useState(""); //1st //5th

  const handleChange = (e) => {
    //4th
    setName(e.target.value);
    document.getElementById("res").innerText = e.target.value;
  };

  const handleSubmit = (e) => {
    //7th
    e.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        {/*2nd*/}
        <label>Enter your Name:</label>
        <br />
        <input type="text" value={name} onChange={handleChange} /> {/*3nd*/}
        <button type="submit">Submit</button> {/*6th*/}
      </form>
      <p id="res"></p>
    </div>
  );
}

export default ControlledForm;
