import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FixedNavbar from "./Components/Layouts/Navbar";
import Landing from "./Components/Pages/Landing";
import Search from "./Components/Pages/SearchPage";
<<<<<<< HEAD
=======
import UnitPage from "./Components/Pages/UnitPage";
import ContactUs from "./Components/Layouts/ContactUs";
>>>>>>> 1a92ecf3f9fd3fc62aad381c4cc74eb4c4ccf90a

function App() {

  return (
      <Router>
    <div className="App">
      <FixedNavbar/>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/search" element={<Search />} />
<<<<<<< HEAD
=======
          <Route exact path="/unit" element={<UnitPage />} />
          
>>>>>>> 1a92ecf3f9fd3fc62aad381c4cc74eb4c4ccf90a
        </Routes>
    </div>
      </Router>

      
  );
}

export default App;
