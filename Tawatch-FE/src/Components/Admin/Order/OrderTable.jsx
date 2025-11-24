import React from 'react';
import styles from '../Css/OrderDashboard.module.css';

const orders = [
  {
    id: '#TA-2891',
    customer: 'John Anderson',
    product: 'Chronograph Elite',
    quantity: 1,
    amount: '$250',
    status: 'Processing',
    date: 'Nov 11, 2025 10:30 AM',
  },
  {
    id: '#TA-2890',
    customer: 'Sarah Miller',
    product: 'Sport Diver Pro',
    quantity: 1,
    amount: '$150',
    status: 'Delivered',
    date: 'Nov 11, 2025 09:15 AM',
  },
  {
    id: '#TA-2889',
    customer: 'Michael Chen',
    product: 'Classic Leather',
    quantity: 2,
    amount: '$300',
    status: 'Processing',
    date: 'Nov 10, 2025 04:45 PM',
  },
  {
    id: '#TA-2888',
    customer: 'Emma Wilson',
    product: 'Smart Connect',
    quantity: 1,
    amount: '$150',
    status: 'Delivered',
    date: 'Nov 10, 2025 02:20 PM',
  },
  {
    id: '#TA-2887',
    customer: 'David Brown',
    product: 'Chronograph Elite',
    quantity: 1,
    amount: '$250',
    status: 'Canceled',
    date: 'Nov 9, 2025 11:00 AM',
  },
  {
    id: '#TA-2886',
    customer: 'Lisa Garcia',
    product: 'Vintage Collection',
    quantity: 1,
    amount: '$320',
    status: 'Shipped',
    date: 'Nov 9, 2025 09:30 AM',
  },
  {
    id: '#TA-2885',
    customer: 'James Wilson',
    product: 'Sport Diver Pro',
    quantity: 3,
    amount: '$450',
    status: 'Processing',
    date: 'Nov 8, 2025 03:15 PM',
  },
  {
    id: '#TA-2884',
    customer: 'Maria Rodriguez',
    product: 'Classic Leather',
    quantity: 1,
    amount: '$150',
    status: 'Delivered',
    date: 'Nov 8, 2025 01:45 PM',
  },
];

const statusClass = {
  Processing: styles.processing,
  Delivered: styles.delivered,
  Canceled: styles.canceled,
  Shipped: styles.shipped,
};

export default function OrderTable() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2>All orders</h2>
        <span className={styles.mini}>Cập nhật lần cuối: hôm nay</span>
      </div>
      <div className={styles.tableWrap}>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className={styles.orderId}>{order.id}</td>
                <td>{order.customer}</td>
                <td className={styles.product}>{order.product}</td>
                <td>{order.quantity}</td>
                <td className={styles.amount}>{order.amount}</td>
                <td>
                  <span className={`${styles.status} ${statusClass[order.status]}`}>
                    <span className={styles.dot}></span>
                    {order.status}
                  </span>
                </td>
                <td className={styles.muted}>{order.date}</td>
                <td className={styles.actionsCell}>
                  <button className={styles.iconBtn}><span className={styles.iconSee}><i className="fas fa-eye"></i></span></button>
                  <button className={styles.iconBtn}><span className={styles.iconPrint}><i className="fas fa-print"></i></span></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
