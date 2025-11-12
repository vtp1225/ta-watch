import React from "react";
import Sidebar from "./Sidebar.jsx";
import StatsCard from "./StatsCard.jsx";
import Revenue from "./Revenue.jsx";
import BestSellers from "./BestSellers.jsx";
import StatusCard from "./StatusCard.jsx";
import RecentOrders from "./RecentOrders.jsx";
import { faBox, faCartShopping, faCalendar, faClock, faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "../Css/DashboardLayout.module.css";

const DashboardLayout = () => {
  const statsData = [
    { title: "Total Products", number: 247, smallText: "In inventory", icon: faBox, color: "purple" },
    { title: "Orders Today", number: 18, smallText: "+3 from yesterday", icon: faCartShopping, color: "green" },
    { title: "Orders This Month", number: 432, smallText: "+12% from last month", icon: faCalendar, color: "pink" },
  ];

  const bestSellersData = [
    { name: "Chronograph Elite", sold: 234, price: "$58,500" },
    { name: "Sport Diver Pro", sold: 198, price: "$29,700" },
    { name: "Classic Leather", sold: 120, price: "$25,050" },
  ];

  const statusData = [
    { title: "Processing Orders", number: 24, percentage: 55.8, icon: faClock, color: "purple" },
    { title: "Delivered Orders", number: 16, percentage: 37.2, icon: faCircleCheck, color: "green" },
    { title: "Canceled Orders", number: 3, percentage: 7, icon: faCircleXmark, color: "red" },
  ];

  const recentOrdersData = [
    { id: "#TA-2891", customer: "John Anderson", product: "Chronograph Elite", amount: "$250", status: "processing", date: "Nov 11, 2025" },
    { id: "#TA-2890", customer: "Sarah Miller", product: "Sport Diver Pro", amount: "$150", status: "delivered", date: "Nov 11, 2025" },
    { id: "#TA-2889", customer: "Michael Chen", product: "Classic Leather", amount: "$150", status: "processing", date: "Nov 10, 2025" },
    { id: "#TA-2888", customer: "Emma Wilson", product: "Smart Connect", amount: "$150", status: "delivered", date: "Nov 10, 2025" },
    { id: "#TA-2887", customer: "David Brown", product: "Chronograph Elite", amount: "$250", status: "canceled", date: "Nov 9, 2025" },
  ];

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <header>
          <h1>Dashboard Overview</h1>
          <p>Welcome back! Here's what's happening today.</p>
        </header>

        <section className={styles.stats}>
          {statsData.map((item, idx) => <StatsCard key={idx} {...item} />)}
        </section>

        <section className={styles.content}>
          <Revenue amount="$3,240" change="+8.2%" />
          <BestSellers products={bestSellersData} />
        </section>

        <section className={styles.orderStatus}>
          {statusData.map((item, idx) => <StatusCard key={idx} {...item} />)}
        </section>

        <RecentOrders orders={recentOrdersData} />
      </main>
    </div>
  );
};

export default DashboardLayout;
