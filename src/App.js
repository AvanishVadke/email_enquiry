import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pythonfsd from "./Pythonfsd";
import Pythonai from "./Pythonai";
import Javafsd from "./Javafsd";
import Jsmernfsd from "./Jsmernfsd";
import NavBar from "./NavBar";
import Enquiry from "./Enquiry";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Pythonfsd />} />
        <Route path="/ai" element={<Pythonai />} />
        <Route path="/ja" element={<Javafsd />} />
        <Route path="/js" element={<Jsmernfsd />} />
        <Route path="/en" element={<Enquiry />} />
        <Route path="*" element={<Pythonfsd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
