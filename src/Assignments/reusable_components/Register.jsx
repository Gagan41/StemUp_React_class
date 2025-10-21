import React, { useState } from "react";
import FormContainer from "./FormContainer";
import Button from "./Button";

function Register({ onSwitch }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registered with Email: ${form.email}`);
  };

  return (
    <FormContainer title="Register">
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          value={form.confirm}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "20px" }}
        />
        <Button type="submit" text="Register" style={{ width: "100%" }} />
      </form>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        Already have an account?{" "}
        <span
          onClick={onSwitch}
          style={{ color: "#2563eb", cursor: "pointer" }}
        >
          Login
        </span>
      </p>
    </FormContainer>
  );
}
export default Register;
