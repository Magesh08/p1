import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./App.css";
import Navbar from "./components/Navbar";
import Mainpage from "./components/Mainpage";
import Service from "./components/Service";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Mainpage></Mainpage>
      <Service></Service>
      <About></About>
    </div>
  );
}

export default App;
