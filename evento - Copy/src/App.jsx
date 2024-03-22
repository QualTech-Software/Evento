import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import CreateEventForm from "./pages/CreateEventForm";

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
        </div>
      </Router>
    </>
  );
}

export default App;
