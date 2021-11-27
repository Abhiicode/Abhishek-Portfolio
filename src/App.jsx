import "./App.css";
import "./Styles/Home.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Achievement from "./Components/Achievement";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import WholePage from "./Components/WholePage";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="home">
      <div className="home__bg">
        <Router>
          <Routes>
            <Route path="/" element={<WholePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/exp" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievement" element={<Achievement />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
