import React from "react";
import styles from "../Css/RecentOrders.module.css";

const RecentOrders = ({ orders }) => (
  <div className={styles.recentOrders}>
    <h2>Recent Orders</h2>
    <table>
      <thead>
        <tr>
          <th>Order ID</th><th>Customer</th><th>Product</th><th>Amount</th><th>Status</th><th>Date</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((o, idx) => (
          <tr key={idx}>
            <td>{o.id}</td>
            <td>{o.customer}</td>
            <td>{o.product}</td>
            <td>{o.amount}</td>
            <td><span className={`${styles.status} ${styles[o.status]}`}>{o.status}</span></td>
            <td>{o.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RecentOrders;
