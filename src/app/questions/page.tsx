"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Styles from './firstinterv.module.css';
import Cat from './Images/Welcome.gif';
import Mic from './Images/Mic.png';

const Dashboard: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [value, setValue] = useState(1); // 1 = red = idle, 2 = blue = recording

  const toggleValue = () => {
    const newValue = value === 1 ? 2 : 1;
    setValue(newValue);
    if (newValue === 2) {
  start();
} else {
  stop();
}

  };

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 10);
      }, 10);
    }
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time: number) => {
    const minutes = String(Math.floor(time / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
    const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className={Styles.FullFrame}>
      <div className={Styles.Intro}>
        <div className={Styles.Left}>
          <Image src={Cat} alt="Cat" className={Styles.Cat} />
        </div>

        <div className={Styles.Right}>
          <h2 className={Styles.Title1}>Question 1:</h2>
          <h2 className={Styles.Title2}>Can we be Pals?</h2>
          <div className={Styles.buttons}>
            <div className={Styles.StopwatchButtons}>
              <button
                className={Styles.Mic}
                onClick={toggleValue}
                style={{ backgroundColor: value === 1 ? 'red' : 'blue' }}
              >
                <Image src={Mic} alt="Mic" className={Styles.MicIcon} />
              </button>
            </div>
            <span className={Styles.Timer}>{formatTime(time)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
