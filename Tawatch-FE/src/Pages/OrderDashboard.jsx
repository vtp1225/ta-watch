import React from 'react';
import styles from '../Components/Admin/Css/OrderDashboard.module.css';
import Header from '../Components/Admin/Order/Header.jsx';
import Toolbar from '../Components/Admin/Order/Toolbar.jsx';
import OrderTable from '../Components/Admin/Order/OrderTable.jsx';  
import Sidebar from '../Components/Admin/AdminDashboard/Sidebar.jsx';
export default function OrderDashboard() {
    const [activeIndex, setActiveIndex] = React.useState(2);
  return (
    <div className={styles.container}>
        <Sidebar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <div className={styles.mainContent}>
      <Header />
      <Toolbar />
      <OrderTable />
      </div>
    </div>
  );
}
