import React, {useEffect, useState} from "react";
import "./timer.css";

const Timers = ({autoStart= false, startTime = 0, speedTime = "1000"}) => {

    const [time, setTime] = useState(startTime);
    const [isActive, setIsActive] = useState(autoStart);

    const timeToggle = () => {
        setIsActive(!isActive);
    }

    useEffect(() => {
        let interval = null;
        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime((time) => time - 1);
            }, speedTime);
        } else if (!isActive && time !== 0) {
            clearInterval(interval)
        }
        return() => clearInterval(interval);
    }, [isActive, time, startTime])

    return (
        <div className="timer-wrapper">
            <div className="timer-block">
                <h3>Speed time: {speedTime} ms</h3>
                <button className="timer-btn" onClick={timeToggle}>
                    {isActive ? "Pause" : "Start"}
                </button>
                <h2>{time}</h2>
            </div>
            <div className="timer-line" style={{ width: `${time}%`}}></div>
        </div>
    )
}

export default Timers;