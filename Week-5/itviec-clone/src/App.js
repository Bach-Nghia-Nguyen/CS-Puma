import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import JobsList from "./pages/JobsList";
import JobDetail from "./pages/JobDetail";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/jobs" exact component={JobsList} />
        <Route path="/jobs/:id" exact component={JobDetail} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
