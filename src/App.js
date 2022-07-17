// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Footer} from './components/Footer';
import Home from './pages/Home'
import AboutUs from './pages/About'
import Courses from './pages/Courses'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" index  element={<Home/>} />
            <Route path="/courses"  element={<Courses/>} />
            <Route path="/about"  element={<AboutUs/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
