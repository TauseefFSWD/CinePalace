// Signup.jsx

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

import Footer from "./Footer";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://netback.onrender.com/signup", {
        username,
        password,
      });
      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div>
      <div className="signup-container">
        <div className="signup-form-wrapper">
          <h2>SignUp </h2>
          {error && <p className="error">{error}</p>}
          <form className="signup-form" onSubmit={handleSignup}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit">Sign Up</button>
            <p>
              Already have an account? <a href="/">Login</a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
