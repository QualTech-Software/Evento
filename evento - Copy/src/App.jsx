import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Banner from "./modules/CreateEventForm/pages/Banner";
import CreateEventForm from "./pages/CreateEventForm";
import Edit from "./modules/CreateEventForm/pages/Edit";
import Ticketing from "./modules/CreateEventForm/pages/Ticketing";
import Review from "./modules/CreateEventForm/pages/Review";

// import Categories from "./Components/Categories";
// import Welcomeevent from "./Components/Welcomeevent";

function App() {
  return (
    <>
      {/* <Welcomeevent />
      <Categories /> */}
      <Router>
        <div>
          <CreateEventForm />

          <Routes>
            <Route path="/" element={<Edit />} />
            <Route path="/banner" element={<Banner />} />
            <Route path="/ticketing" element={<Ticketing />} />
            <Route path="/review" element={<Review />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
