import './App.css';
import About from './components/about/about';
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
    </div>
  );
}

export default App;
