import React from "react";
import Sidebar from "../Components/Admin/AdminDashboard/Sidebar.jsx";
import StatsCard from "../Components/Admin/AdminDashboard/StatsCard.jsx";
import Revenue from "../Components/Admin/AdminDashboard/Revenue.jsx";
import BestSellers from "../Components/Admin/AdminDashboard/BestSellers.jsx";
import StatusCard from "../Components/Admin/AdminDashboard/StatusCard.jsx";
import RecentOrders from "../Components/Admin/AdminDashboard/RecentOrders.jsx";
import { faBox, faCartShopping, faCalendar, faClock, faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "../Components/Admin/Css/DashboardLayout.module.css";

const DashboardPage = () => {
    const revenueData = [
  {
    date: "2025-11-10", // ngày doanh thu, dạng ISO (YYYY-MM-DD) hoặc Date string hợp lệ
    amount: 3240,       // số tiền doanh thu (number)
  },
  {
    date: "2025-11-11",
    amount: 2800,
  },
  {
    date: "2025-11-12",
    amount: 3500,
  }
];

  const statsData = [
    { title: "Tổng sản phẩm", number: 247, smallText: "Trong kho", icon: faBox, color: "purple" },
    { title: "Đơn hàng hôm nay", number: 18, smallText: "+3 so với hôm qua", icon: faCartShopping, color: "green" },
    { title: "Đơn hàng tháng này", number: 432, smallText: "+12% so với tháng trước", icon: faCalendar, color: "pink" },
  ];

  const bestSellersData = [
    { name: "Chronograph Elite", sold: 234, price: "$58,500" },
    { name: "Sport Diver Pro", sold: 198, price: "$29,700" },
    { name: "Classic Leather", sold: 120, price: "$25,050" },
  ];

  const statusData = [
    { title: "Đơn hàng đang xử lý", number: 24, percentage: 55.8, icon: faClock, color: "purple" },
    { title: "Đơn hàng đã giao", number: 16, percentage: 37.2, icon: faCircleCheck, color: "green" },
    { title: "Đơn hàng đã hủy", number: 3, percentage: 7, icon: faCircleXmark, color: "red" },
  ];

  const recentOrdersData = [
    { id: "#TA-2891", customer: "John Anderson", product: "Chronograph Elite", amount: "$250", status: "processing", date: "Nov 11, 2025" },
    { id: "#TA-2890", customer: "Sarah Miller", product: "Sport Diver Pro", amount: "$150", status: "delivered", date: "Nov 11, 2025" },
    { id: "#TA-2889", customer: "Michael Chen", product: "Classic Leather", amount: "$150", status: "processing", date: "Nov 10, 2025" },
    { id: "#TA-2888", customer: "Emma Wilson", product: "Smart Connect", amount: "$150", status: "delivered", date: "Nov 10, 2025" },
    { id: "#TA-2887", customer: "David Brown", product: "Chronograph Elite", amount: "$250", status: "canceled", date: "Nov 9, 2025" },
  ];
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <div className={styles.container}>
      <Sidebar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <main className={styles.main}>
        <header>
          <h1> Bảng điều khiển</h1>
          <p>Chào mừng bạn trở lại! Đây là những gì đang diễn ra hôm nay.</p>
        </header>

        <section className={styles.stats}>
          {statsData.map((item, idx) => <StatsCard key={idx} {...item} />)}
        </section>

        <section className={styles.content}>
          <Revenue  revenueData={revenueData} />
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

export default DashboardPage;
