import React from "react";
import { useSelector } from "react-redux";

import LoginForm from "../components/LoginForm";

const Login = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="login-container">
      {user ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          {/* <button onClick={logout}>Log Out</button> */}
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default Login;
