import { useEffect, useState } from "react";
import "./QuizTimer.scss";
import { GiAlarmClock } from "react-icons/gi";


const QuizTimer = () => {

    const [totalSeconds, setTotalSeconds] = useState(15*60);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(15);
    const [seconds, setSeconds] = useState(0);

    useEffect( () => {
        if(totalSeconds > 0){
            const timeInterval = setInterval(() =>{
                setTotalSeconds(totalSeconds - 1);
                const hours = Math.floor(totalSeconds / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60);
                const seconds = totalSeconds % 60;
                setHours(hours < 10? `0${hours}` : hours);
                setMinutes(minutes < 10? `0${minutes}` : minutes);
                setSeconds(seconds < 10? `0${seconds}` : seconds);
            }
        ,1000);
         return () => clearInterval(timeInterval);
    
    }}
    , [totalSeconds]);

    return (
        <div className="Quiz_Timer_container">
            <div className="clock_icon"><GiAlarmClock /></div>
            <div className="timer_text"><span>Quiz</span> time starts</div>
            <div className="timer_clock">
                <div className="hours">
                    <span>{hours}</span>
                    <span className="small_text">HRS</span>
                </div>
                <div className="colon"></div>
                <div className="minutes">
                    <span>{minutes}</span>
                    <span className="small_text">MIN</span>
                </div>
                <div className="colon"></div>
                <div className="seconds">
                    <span>{seconds}</span>
                    <span className="small_text">SEC</span>
                </div>
            </div>
            
        </div>
    );
};

export default QuizTimer;

