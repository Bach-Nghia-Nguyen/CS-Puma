import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { authActions } from "./redux/actions/auth.actions";

import NavigationBar from "./components/NavigationBar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import JobsList from "./pages/JobsList";
import JobDetail from "./pages/JobDetail";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const admin = {
    name: "Nghia",
    email: "nghia@gmail.com",
    password: "061296",
  };
  let history = useHistory();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // const [user, setUser] = useState({
  //   email: "",
  //   name: "",
  //   isAuthenticated: false,
  // });

  // const login = (details) => {
  //   console.log(details);

  //   if (details.email === admin.email && details.password === admin.password) {
  //     console.log("Log in successfully");

  //     setUser({
  //       name: admin.name,
  //       email: admin.email,
  //       isAuthenticated: true,
  //     });

  //     history.push("/jobs");
  //   } else {
  //     setError("Wrong username or password!");
  //   }
  // };

  // useDispatch(authActions.login())

  // const logout = () => {
  //   console.log("Log out");
  //   setUser({ name: "", email: "" });
  // };

  const ProtectedRoute = (props) => {
    if (isAuthenticated === true) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path="/login" exact component={() => <Login />} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/jobs" exact component={JobsList} />

        <ProtectedRoute
          path="/jobs/:id"
          render={(props) => <JobDetail {...props} />}
        />
        <Route path="/" exact component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
