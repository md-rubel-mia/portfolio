import './App.css';
import About from './components/about/about';
import Experience from './components/experience/experience';
import HamburgerNav from './components/hamburger-nav/hamburger-nav';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
function App() {
  return (
    <div className="App">
     <Navbar />
     {/* <HamburgerNav /> */}
     <Profile />
     <About />
     <Experience />
    </div>
  );
}

export default App;
