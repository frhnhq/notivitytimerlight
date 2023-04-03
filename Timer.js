import React, { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setTime(25 * 60);
    setIsActive(false);
  };

  return (
      <div className="timer-wrapper">
        <div className="text">Powered By Notivity</div>
        <div className="timer">
          <div className="time">
            {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
          </div>
          <div className="buttons">
            {!isActive ? (
              <button className="button start" onClick={startTimer}>
                Start
              </button>
            ) : (
              <button className="button pause" onClick={pauseTimer}>
                Pause
              </button>
            )}
            <button className="button reset" onClick={resetTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
    
}

export default Timer;
