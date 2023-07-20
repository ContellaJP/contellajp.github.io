import Navbar from "./Navbar";
import About from "./pages/About"
import Home from "./pages/HomePage"
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom"
import SocialIconsBar from './SocialIcons';

function App() {
  return (
  <>
    <Navbar />
    <SocialIconsBar />
    
    <div className="container">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </div>

  </>
  );
}

export default App;
