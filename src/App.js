import "./App.css";
import { Whiteapper } from "./Components/Whitepaper";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Components/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Whitepaper" element={<Whiteapper />} />
          <Route path="/" element={<Home /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
