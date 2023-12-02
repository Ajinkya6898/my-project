import React from "react";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center">
      <div className="card mt-5 m-auto w-25 px-3 pb-3">
        <h3 className="my-3">Welcome back</h3>
        <form onSubmit={() => navigate("/home")}>
          <input
            type="text"
            class="form-control my-2"
            placeholder="Enter Username Here"
          />
          <input
            type="password"
            class="form-control my-2"
            placeholder="Enter Password Here"
          />
          <div className="text-start">
            <button className="btn btn-link btn-sm text-start text-decoration-none mb-2">
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
