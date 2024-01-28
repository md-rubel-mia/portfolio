import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
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
     <Footer />
    </div>
  );
}

export default App;
