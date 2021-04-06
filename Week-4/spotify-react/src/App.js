import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavigationBar from "./components/NavigationBar";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavigationBar />
      <MainSection />
      <Footer />
    </>
  );
}

export default App;
