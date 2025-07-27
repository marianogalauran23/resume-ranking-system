import React from 'react';
<<<<<<< HEAD
import Image from 'next/image';
import Styles from "./firstinterv.module.css";
import Cat from "./Images/Welcome.gif";
import Mic from "./Images/Mic.png";

const Dashboard: React.FC = () => {
    return (
       <div className={Styles.FullFrame}>
        <div className={Styles.Intro}>
            <div className={Styles.Left}>
                <Image src={Cat} alt="Cat" className={Styles.Cat}/>
            </div>

            <div className={Styles.Right}>
                <h2 className={Styles.Title1}>Hello Applicant</h2>
                <h2 className={Styles.Title2}>Let us Start the AI Interview shall we?</h2>
                <div className={Styles.buttons}>
                    <button className={Styles.StartButton}>Start</button>
                    <button className={Styles.Mic}><Image src={Mic} alt="Microphone" className={Styles.MicIcon} /></button>
                </div>
            </div>
        </div>
    </div>
=======

const Dashboard: React.FC = () => {
    return (
       <div>
            <div>
                <div>
                    <h1>Dashboard</h1>
                </div>
            </div>
       </div>
>>>>>>> f530064be3827b842f0f334844fcdd79efe20a98
    );
};

export default Dashboard;