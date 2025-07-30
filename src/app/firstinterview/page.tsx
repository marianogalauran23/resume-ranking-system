import React from 'react';
import Image from 'next/image';
import Styles from "./dashboard.module.css";
import Home from "./Images/home.png";
import List from "./Images/list.png";
import Notificaation from "./Images/notification.png";
import Return from "./Images/return.png";
import Search from "./Images/search.png";
import Profile from "./Images/profile.png";

const firstinterview: React.FC = () => {
    return (
       <div className={Styles.FullFrame}>
        <div className={Styles.leftFrame}>
        <div className={Styles.Sidebar}>
            <div className={Styles.Top}>
                <Image className={Styles.SidebarButtons} src={Home} alt="Home"/>
                <Image className={Styles.SidebarButtons} src={List} alt="List"/>
            </div>

            <div className={Styles.Bottom}>
                <Image className={Styles.SidebarButtons} src={Notificaation} alt="Notification"/>
                <Image className={Styles.SidebarButtons} src={Return} alt="Return"/>
            </div>
        </div>
       </div>

       <div className={Styles.rightFrame}>
        <div className={Styles.searchBar}>
            <Image src={Search} alt="Search Icon" className={Styles.SearchIcon}/>
            <input type="text" placeholder="Search..." className={Styles.SearchInput}/>
            <Image src={Profile} alt="Profile" className={Styles.Profile}/>
        </div>
        <div className={Styles.overViews}>
            <div className={Styles.gridOverview}>
                <div className={Styles.overviewItem}>
                    <h1 className={Styles.overviewTitle}>CONTAINER 1</h1>
                </div>

                <div className={Styles.overviewItem}>
                    <h1 className={Styles.overviewTitle}>CONTAINER 2</h1>
                </div>

                <div className={Styles.overviewItem}>
                    <h1 className={Styles.overviewTitle}>CONTAINER 3</h1>
                </div>

                <div className={Styles.overviewItem}>
                    <h1 className={Styles.overviewTitle}>CONTAINER 4</h1>
                </div>
            </div>

            <div className={Styles.SoloOverview}>
                <h3 className={Styles.overviewTitle}>THIS IS <br></br>A SOLO</h3>
            </div>
        </div>
        <div className={Styles.Table}>
            <h3 className={Styles.overviewTitle}>THIS IS A TABLE</h3>
        </div>
       </div>
       </div>
    );
};

export default firstinterview;