import React from "react";
import '../../App.css';
import {NavLink} from "react-router-dom";
const Navbar = () => {

    return(
        <div className="navbar">
            <span><NavLink to="/"><h3>GIPHY</h3></NavLink>
            </span>
        </div>
    )
}

export default Navbar;