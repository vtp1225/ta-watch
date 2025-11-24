import React from "react";
import styles from "../Css/DashboardLayout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatusCard = ({ title, number, percentage, icon, color }) => (
  <div className={styles.statusCard}>
    <div className={styles.info}>
      <h3>{title}</h3>
      <p className={styles.number}>{number}</p>
      <div className={`${styles.progress} ${styles[color]}`} 
      style={{ '--percent': percentage + '%' }}></div>
      <small>{percentage}% of total</small>
    </div>
    <div className={`${styles.cardIcon} ${styles[color]}`}>
      <FontAwesomeIcon icon={icon} />
    </div>
  </div>

);

export default StatusCard;
