import React, { useState } from "react";
import FormContainer from "./FormContainer";
import Button from "./Button";

function Login({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in with Email: ${email}`);
  };

  return (
    <FormContainer title="Login">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "20px" }}
        />
        <Button type="submit" text="Login" style={{ width: "100%" }} />
      </form>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        Don't have an account?{" "}
        <span
          onClick={onSwitch}
          style={{ color: "#2563eb", cursor: "pointer" }}
        >
          Register
        </span>
      </p>
    </FormContainer>
  );
}
export default Login;
