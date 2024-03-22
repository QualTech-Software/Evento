import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Create from "./pages/Create";

import Home from "./pages/Home";
import Login from "./modules/Login/pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/account" element={<Register />} />
    </Routes>
  );
}

export default App;
