import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import logo from "./assets/images/logo1.png";
import "./App.scss";
import IMAGES_SKILLS from "./assets/index";
import PROJECTS from "./components/Portfolio/projects";
import ICONS from "./components/Contact/icons";

function App() {
  return (
    <>
      <Navbar logo={logo} />
      <main className="container">
        <About profileImage={require("./assets/images/prof-img.jpg")} imageSkills={IMAGES_SKILLS}/>
        <Portfolio projects={PROJECTS} />
      </main>
      <Contact contactIcons={ICONS} />
    </>
  );
}

export default App;
