import React from "react";
import styles from "../Css/Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faChartLine, faBox, faCartShopping, faUsers, faGear } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.icon}><FontAwesomeIcon icon={faClock} /></div>
        <div>
          <h2>TA Watch</h2>
          <p>Admin Panel</p>
        </div>
      </div>

      <ul className={styles.menu}>
        <li className={styles.active}><FontAwesomeIcon icon={faChartLine} /> Dashboard</li>
        <li><FontAwesomeIcon icon={faBox} /> Product Management</li>
        <li><FontAwesomeIcon icon={faCartShopping} /> Order Management</li>
        <li><FontAwesomeIcon icon={faUsers} /> Customers</li>
        <li><FontAwesomeIcon icon={faGear} /> Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
