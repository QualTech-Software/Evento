import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Create from "./pages/Create.jsx";
import CreateEventForm from "./pages/CreateEventForm.jsx";
import Login from "./modules/login/pages/Login.jsx";
import WelcomeEvent from "./pages/WelcomeEvent.jsx";
<<<<<<< HEAD
import EventCarousel from "./modules/Home/pages/EventCarousel.jsx";
=======
import EventCategory from "./modules/events/pages/EventCategory.jsx";
// import SuccessModal from "./modules/login/pages/SuccessModal.jsx";
>>>>>>> 294c8175d6122ea82a66fd39fe2c7e8c14204ae6

function App() {
  return (
    <Routes>
      <Route path="/createeventform/*" element={<CreateEventForm />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<Create />} />
      <Route path="/account" element={<Register />} />
      <Route path="/welcome" element={<WelcomeEvent />} />
<<<<<<< HEAD
      <Route path="/eventcarousel" element={<EventCarousel />} />
=======
      <Route path="/category/event/:category_id" element={<EventCategory />} />
>>>>>>> 294c8175d6122ea82a66fd39fe2c7e8c14204ae6
    </Routes>
  );
}
export default App;
