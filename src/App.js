// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Footer} from './components/Footer';
import Home from './pages/Home'
import AboutUs from './pages/About'
import Courses from './pages/Courses'
import Pages from './components/Pages'
import Users from './pages/Users'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Page404 from './pages/Page404'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" index  element={<Home/>} />
            <Route path="/courses"  element={<Courses/>} />
            <Route path="/users"  element={<Users/>} />
            <Route path="/pages"  element={<Pages/>} />
            <Route path="/about"  element={<AboutUs/>} />
            <Route path="*" element={<Page404 />} status={404}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
