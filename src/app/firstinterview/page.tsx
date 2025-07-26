import React from 'react';
import Image from 'next/image';
import Styles from "./dashboard.module.css";

const firstinterview: React.FC = () => {
    return (
       <div className={Styles.FullFrame}>
        <div className={Styles.leftFrame}>
        <div className={Styles.Sidebar}>
            <div className={Styles.Top}>
                <Image src={} alt="Home"/>
                <Image src={} alt="List"/>
            </div>

            <div className={Styles.Bottom}>
                <Image src={} alt="Notification"/>
                <Image src={} alt="Return"/>
            </div>
        </div>
       </div>

       <div className={Styles.rightFrame}>
        
       </div>
       </div>
    );
};

export default firstinterview;