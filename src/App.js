import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import DataProjects from "./components/DataProjects";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import WebProjects from "./components/WebProjects";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <WebProjects />
      <DataProjects />
      <Contact />
    </div>
  );
}

export default App;
