import Navbar from "./Navbar";
import About from "./pages/About"
import Home from "./pages/HomePage"
import Content from "./pages/Projects"
import Resume from "./pages/Resume"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
  <>
    <Navbar />
    
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/content" element={<Content/>} />
    </Routes>
    </div>

  </>
  );
}

export default App;
