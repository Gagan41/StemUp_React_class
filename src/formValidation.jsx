import { React, useState } from "react";

function Formvalidation() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [number, setNumber] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email");
    } else if (number.length < 10 || number.length > 10) {
      setError1("Enter a valid number");
    } else {
      setError("");
      setError1("");
      alert(`Email submitted : ${email},
        Number submitted is: ${number}`);
    }
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button type="submit">Submit email and number</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {error1 && <p style={{ color: "red" }}>{error1}</p>}
    </form>
  );
}

export default Formvalidation;
