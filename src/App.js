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
        <Route path="/react-portfolio" element={<Home />} />
        <Route path="/react-portfolio/about" element={<About/>} />
        <Route path="/react-portfolio/projects" element={<Projects/>} />
      </Routes>
    </div>

  </>
  );
}

export default App;
