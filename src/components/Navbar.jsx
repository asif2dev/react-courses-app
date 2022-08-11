import React,{useState,useEffect} from 'react'
import "../styles/navbar.css";
import brandLogo from "../images/brandLogo.svg";
import {Link} from "react-router-dom";
import ThemeSwitcher from "../helpers/ThemeSwitcher";

function Navbar() {    
    return (
        <div className="navbar">
            <div className="brandlogo">
                <img src={brandLogo} alt="BrandLogo" /> 
            </div>
            <div className="navLinks">
                <Link to="/" >Home</Link>
                <Link to="/courses" >Courses</Link>
                <Link to="/users" >Users</Link>
                <Link to="/pages" >Pages</Link>
                <Link to="/about" >About</Link>
                <ThemeSwitcher />
            </div>
        </div>
    )
}

export default Navbar