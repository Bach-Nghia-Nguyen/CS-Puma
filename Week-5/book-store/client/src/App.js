import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Notification from "./components/Notification";

import HomePage from "./pages/HomePage";
import BookDetailPage from "./pages/BookDetailPage";
import ReadingPage from "./pages/ReadingPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Notification />
      <Switch>
        <Route path="/books/:id" exact component={BookDetailPage} />
        <Route path="/reading" exact component={ReadingPage} />
        <Route path="/" exact component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
