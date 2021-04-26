import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavigationBar from "./components/NavigationBar";
import ControlPad from "./components/ControlPad";

import BoxList from "./components/BoxList";

const App = () => {
  return (
    <div className="container app-wrapper">
      <NavigationBar />
      <main>
        <ControlPad />

        <BoxList />
      </main>
    </div>
  );
};

export default App;
