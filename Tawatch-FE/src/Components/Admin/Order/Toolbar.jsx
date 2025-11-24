import React from 'react';
import styles from '../Css/OrderDashboard.module.css';

export default function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <input className={styles.input} type="text" placeholder="Tìm theo Order ID, khách hàng, sản phẩm..." />
      <select className={styles.select}>
        <option>Tất cả trạng thái</option>
        <option>Processing</option>
        <option>Delivered</option>
        <option>Shipped</option>
        <option>Canceled</option>
      </select>
      <button className={styles.btn}>Lọc</button>
    </div>
  );
}
