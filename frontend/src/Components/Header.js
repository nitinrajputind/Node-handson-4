import React from "react";
import { NavLink } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'

const Header = () => {
  // const navigate = useNavigate()
  return (
    <>
      <header>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
        </ul>

        <ul>
        <li><NavLink to={"/login"}>Login</NavLink></li>
        <li><NavLink to={"/Register"}>Register</NavLink></li>
        <li><NavLink to={"/Dashboard"}>DashBoard</NavLink></li>
        </ul>
      </header>
    </>
  );
};

export default Header;
