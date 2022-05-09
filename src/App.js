import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FixedNavbar from "./Components/Layouts/Navbar";
import Landing from "./Components/Pages/Landing";
import Search from "./Components/Pages/SearchPage";
import UnitPage from "./Components/Pages/UnitPage";
import ContactUsPage from "./Components/Pages/ContactUsPage";

function App() {

  return (
      <Router>
    <div className="App">
      <FixedNavbar/>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/contact-us" element={<ContactUsPage />} />
          <Route exact path="/unit" element={<UnitPage />} />
          
        </Routes>
    </div>
      </Router>

      
  );
}

export default App;
