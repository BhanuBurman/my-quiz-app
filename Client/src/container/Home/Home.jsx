import React, { useEffect } from 'react';

import {Link} from "react-scroll";

import { FaArrowRight } from "react-icons/fa6";
import HomeBg from "../../assets/Home_bg_2.jpg";
import "./Home.scss";
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='Quiz_App_Home_Container'>
        <div className="left_section">
            <h1>Create Quizzes that drive your business <i>forward</i></h1>
            <p>Engage your audience, generate leads, segment customers, recommend products, and gather insights - all with one simple tool.</p>
            <Link
              to="quizCreatorSection"
              smooth={true}
            >
              <button className='left_section_button'>Get Started <FaArrowRight style={{"marginLeft" : "10px"}}/></button>
            </Link>
        </div>

        <div className="right_section">
            <img src={HomeBg} alt="" />
        </div>

    </div>
  )
}

export default Home
