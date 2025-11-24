import React from "react";
import styles from "../Css/DashboardLayout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatsCard = ({ title, number, smallText, icon, color }) => {
    
  return (
<div className={styles.card}>
  <div className={styles.info}>
    <h3>{title}</h3>
    <p className={styles.number}>{number}</p>
    <small>{smallText}</small>
  </div>
  <div className={`${styles.cardIcon} ${styles[color]}`}>
    <FontAwesomeIcon icon={icon} />
  </div>
</div>

  );
};

export default StatsCard;
