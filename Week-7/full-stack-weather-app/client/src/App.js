import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";

function App() {
  const getData = async () => {
    let url = `http://localhost:5500`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavigationBar />

      <Container>
        <p>Insert here</p>
      </Container>
    </>
  );
}

export default App;
