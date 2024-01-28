import './App.css';
import HamburgerNav from './components/hamburger-nav/hamburger-nav';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
function App() {
  return (
    <div className="App">
     <Navbar />
     {/* <HamburgerNav /> */}
     <Profile />
    </div>
  );
}

export default App;
