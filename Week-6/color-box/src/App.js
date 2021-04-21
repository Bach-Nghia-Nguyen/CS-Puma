import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useSelector } from "react-redux";

import NavigationBar from "./components/NavigationBar";
import ControlPad from "./components/ControlPad";
import Box from "./components/Box";

const App = () => {
  const count = useSelector((state) => state.count);

  return (
    <div className="container app-wrapper">
      <NavigationBar />
      <main>
        <ControlPad />

        <section className="box-list">
          {Array.from(Array(count)).map((c, index) => {
            return <Box key={index} num={index + 1} />;
          })}
        </section>
      </main>
    </div>
  );
};

export default App;
