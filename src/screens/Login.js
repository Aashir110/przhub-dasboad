import React, { useState } from "react";
import "../styles/Login.css";
import logo from "../images/logo1.png";
import InputField from "../components/InputField";
import Button from "../components/Button";
// import Footer from "../components/Foooter";
import { Link } from "react-router-dom";
import User from "../data/User";
// import { Navigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const users = User.find((user) => user.email === email);

    if (users) {
      if (users.password === password) {
        setError("");
        setEmail(""); // Clear the email input
        setPassword(""); // Clear the password input
        console.log("Login successful");
      } else {
        setError("Incorrect password");
        setEmail(""); // Clear the email input
        setPassword("");
      }
    } else {
      setError("User not found");
      setEmail(""); // Clear the email input
      setPassword("");
    }
  };

  return (
    <div>
      <div className="login">
        <div className="login-box">
          <div className="logo text-center">
            <img src={logo} alt="img" />
          </div>
          <div className="heading">
            <h2>Login</h2>
          </div>
          <InputField
            type={"email"}
            placeholder={"Enter your Email"}
            id={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type={"password"}
            placeholder={"Password"}
            id={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField type={"checkbox"} label={"Remember me"} id={"check"} />

          <Button title="Login" onClick={handleSubmit} type="submit" />

          <div className="forget">
            <Link to="/">Forget password?</Link>
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Login;
