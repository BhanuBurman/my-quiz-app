import React from "react";

import quizLogo from "../../assets/quizLogo.jpg";
import "./NavBar.scss";
import { useNavigate } from "react-router-dom";
import {Link} from "react-scroll";
import { FaArrowRight } from "react-icons/fa6";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="Quiz_App_Navbar">
      <div className="Navbar_left_section">
        <img src={quizLogo} alt="" />
        <Link to="/products" className="navbar_items">
          Product
        </Link>
        <Link to="/pricing" className="navbar_items">
          Pricing
        </Link>
        <Link to="/support" className="navbar_items">
          Support
        </Link>
        <Link to="/about-us" className="navbar_items">
          About us
        </Link>
      </div>
      <div className="Navbar_right_section">
        <button className="navbar_right_section_login">Login</button>
        <Link
          to="quizCreatorSection"
          smooth={true}
        >
          <button
            className="right_section_get_started"
          >
            Get Started
            <FaArrowRight style={{ marginLeft: "10px" }} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
