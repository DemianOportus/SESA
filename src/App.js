import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// IMPORT PAGES FOR ROUTING
import Homepage from "./components/pages/Homepage";
import Contact from "./components/pages/Contact.js";
import Resources from "./components/pages/Resources";
import Events from "./components/pages/Events";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
