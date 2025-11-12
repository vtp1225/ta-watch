import React from "react";
import styles from "../Css/Revenue.module.css";

const Revenue = ({ amount, change }) => {
  return (
    <div className={styles.revenue}>
      <h2>Revenue Overview</h2>
      <p className={styles.amount}>{amount} <span className={styles.up}>{change}</span></p>
      <small>Revenue generated today</small>
      <div className={styles.chartPlaceholder}>[Biểu đồ doanh thu]</div>
    </div>
  );
};

export default Revenue;
