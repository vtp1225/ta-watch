import React from 'react';
import styles from '../Css/OrderDashboard.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <div>
          <h1>Order management</h1>
          <p>Quản lý và theo dõi đơn hàng thời gian thực</p>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.btn}>Xuất file Excel</button>
        <button className={styles.btn}>Làm mới</button>
        <button className={`${styles.btn} ${styles.primary}`}>Tạo đơn hàng</button>
      </div>
    </div>
  );
}
