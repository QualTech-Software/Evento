import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Create from "./pages/Create.jsx";
import CreateEventForm from "./pages/CreateEventForm.jsx";
import Login from "./modules/login/pages/Login.jsx";
// import Login from "./pages/Login.jsx";
import WelcomeEvent from "./pages/WelcomeEvent.jsx";
function App() {
  return (
    <Routes>
      <Route path="/createeventform/*" element={<CreateEventForm />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<Create />} />
      <Route path="/account" element={<Register />} />
      <Route path="/welcome" element={<WelcomeEvent />} />
    </Routes>
  );
}
export default App;
