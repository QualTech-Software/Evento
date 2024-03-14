import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Create from "./Components/Account/Create";
import Account from "./Components/AccountExtraFields/Account";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Create />} />
      <Route path="/account" element={<Account />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
