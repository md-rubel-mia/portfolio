import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Experience from './components/experience/experience';
import HamburgerNav from './components/hamburger-nav/hamburger-nav';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Projects from './components/projects/projects';
function App() {
  return (
    <div className="App">
     <Navbar />
     {/* <HamburgerNav /> */}
     <Profile />
     <About />
     <Experience />
     <Projects />
     <Contact />
    </div>
  );
}

export default App;
