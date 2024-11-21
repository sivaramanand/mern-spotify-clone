import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../context/User";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser, btnLoading } = UserData();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    loginUser(email, password, navigate);
  };
  return (
    <div className="flex items-center justify-center h-screen hax-h-screen">
      <div className="bg-black text-white p-8 rounded-lg shadow-lg max-w-md w-full ">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Login to spotify
        </h2>
        <form className="mt-8" onSubmit={submitForm}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 flex pb-2 text-base">
              Email
            </label>
            <input
              type="email"
              placeholder="email or username"
              className="auth-input"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 flex pb-2 text-base">
              Password
            </label>
            <input
              type="password"
              placeholder="password"
              className="auth-input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button disabled={btnLoading} type="submit" className="auth-btn">
            {btnLoading ? <>Loading...</> : <>Login</>}
          </button>
        </form>
        <div className="text-center mt-6">
          <Link
            to="/register"
            className="text-sm text-gray-400 hover:text-gray-300"
          >
            Dont have a account? Register then
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
