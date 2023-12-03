import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/userstore";

const Login = () => {
  const navigate = useNavigate();
  const login = useUserStore((state) => state.login);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    navigate("/home");
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleForgotpass = () => {
    navigate("/forgotpassword");
  };

  return (
    <div className="container text-center">
      <div className="card mt-5 m-auto w-25 px-3 pb-3">
        <h3 className="my-3">Welcome back</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control my-2"
            placeholder="Enter Username Here"
            onChange={handleChange}
          />
          <input
            type="password"
            className="form-control my-2"
            placeholder="Enter Password Here"
            onChange={handlePasswordChange}
          />
          <div className="text-start">
            <button
              className="btn btn-link btn-sm text-start text-decoration-none mb-2"
              onClick={handleForgotpass}
            >
              Forgot Password
            </button>
          </div>
          <button className="btn btn-primary my-2 w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
