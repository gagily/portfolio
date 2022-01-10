import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import ButtonTop from "./components/ButtonTop/ButtonTop";
import logo from "./assets/images/logo1.png";
import "./App.scss";
import IMAGES_SKILLS from "./assets/images";
import ICONS from "./data/icons";
import PROJECTS from "./data/projects";


function App() {
  return (
    <>
      <Navbar logo={logo} />
      <main className="container">
        <About profileImage={[require("./assets/images/prof-img.jpg"), require("./assets/images/prof-img.jpg")]} imageSkills={IMAGES_SKILLS}/>
        <Portfolio projects={PROJECTS} />
      </main>
      <ButtonTop/>
      <Contact contactIcons={ICONS} />
    </>
  );
}

export default App;
