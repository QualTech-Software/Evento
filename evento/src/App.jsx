import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Create from "./pages/Create.jsx";
import CreateEventForm from "./pages/CreateEventForm.jsx";
function App() {
  return (
    <Routes>
      <Route path="/createeventform/*" element={<CreateEventForm />} />
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/account" element={<Register />} />
    </Routes>
  );
}

export default App;
