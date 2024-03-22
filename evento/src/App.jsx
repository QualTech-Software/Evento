import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Create from "./Pages/Create";
import Login from "./modules/Login/pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/create" element={<Create />} />
      <Route path="/account" element={<Register />} />
    </Routes>
  );
}

export default App;
