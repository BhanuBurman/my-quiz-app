import React from 'react'

import './Congratulations.scss'
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Congratulations = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
       navigate("/");
    }
  return (
    props.trigger?(
        <div className='Congrat_container'>
            <div className="Congrat_Inner_Box">
                <div className='pop_up_close_button' onClick={handleClick}>
                    <button><IoCloseSharp /></button>
                </div>
                <div className="congratulations_text">
                <h1>Congratulations!🎉🎊</h1>
                <p>You've successfully completed the quiz!</p>

                </div>
                <div className='pop_up_ok_button'>
                    <button onClick={handleClick}>Ok</button>
                </div>
            </div>
        </div>
    ):""
  )
}

export default Congratulations
