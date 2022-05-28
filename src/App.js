import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FixedNavbar from "./Components/Layouts/Navbar";
import Landing from "./Components/Pages/Landing";
import Search from "./Components/Pages/SearchPage";
import UnitPage from "./Components/Pages/UnitPage";
import ContactUsPage from "./Components/Pages/ContactUsPage";
import AboutUs from "./Components/Pages/AboutUs";
import Blog from "./Components/Pages/Blog"
import axios from "axios";
import { useEffect ,useState , useMemo} from "react";
import { ApiContext } from "./ApiContext";
import { useSelector } from "react-redux";


function App() {
  const [post, setPost] = useState([]);
  const GetRequest = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/allunits`);
      setPost(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  


  return (
    <ApiContext.Provider value={post}>
      <Router>
    <div className="App">
      <FixedNavbar/>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/contact-us" element={<ContactUsPage />} />
          <Route exact path="/unit/:id" element={<UnitPage />} />
          <Route exact path="/About-us" element={<AboutUs />} />
          <Route exact path="/Blog" element={<Blog />} />
        </Routes>
    </div>
      </Router>
      </ApiContext.Provider>
      
  );
}

export default App;
