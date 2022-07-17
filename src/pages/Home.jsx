import React from 'react'
import '../styles/home.css'
import brandLogo from "../images/logo.svg";
import AboutImage from '../images/algorithm.png';
import {Link} from 'react-router-dom'
const MainBody = () => {
  return (
    <div className="Home">
        <h1 className="home_header">Skill Booster</h1>
        <div className="homeContent">
          <img src={AboutImage} alt="" />
          <div>
            <h2>Learn Anything <br/><span className="speed">At the Speed Of</span> <span className="light">Light</span></h2>
            <h3>
              <Link className="explore" to="courses">Explore Courses</Link>
            </h3>
          </div>
        </div>
    </div>
  )
}

export default MainBody