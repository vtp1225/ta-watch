import React, { useState } from "react";
import styles from "../Css/DashboardLayout.module.css";

const Revenue = ({ revenueData }) => {
  const [filter, setFilter] = useState("day"); // day, week, month, custom
  const [customRange, setCustomRange] = useState({ from: "", to: "" });

  // Hàm tính doanh thu dựa trên filter
  const getRevenue = () => {
    let amount = 0;
    let change = "+0%";

    // Đây là ví dụ, revenueData có thể là mảng các object {date, amount}
    const now = new Date();

    if (filter === "day") {
      const today = revenueData.find(r => new Date(r.date).toDateString() === now.toDateString());
      if (today) amount = today.amount;
    } else if (filter === "week") {
      const weekStart = new Date(now.setDate(now.getDate() - now.getDay()));
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      amount = revenueData
        .filter(r => {
          const d = new Date(r.date);
          return d >= weekStart && d <= weekEnd;
        })
        .reduce((sum, r) => sum + r.amount, 0);
    } else if (filter === "month") {
      const month = now.getMonth();
      const year = now.getFullYear();
      amount = revenueData
        .filter(r => {
          const d = new Date(r.date);
          return d.getMonth() === month && d.getFullYear() === year;
        })
        .reduce((sum, r) => sum + r.amount, 0);
    } else if (filter === "custom" && customRange.from && customRange.to) {
      const from = new Date(customRange.from);
      const to = new Date(customRange.to);
      amount = revenueData
        .filter(r => {
          const d = new Date(r.date);
          return d >= from && d <= to;
        })
        .reduce((sum, r) => sum + r.amount, 0);
    }

    return { amount, change };
  };

  const { amount, change } = getRevenue();

  return (
    <div className={styles.revenue}>
     <h2>Tổng doanh thu</h2>

      <div className={styles.filter}>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="day">Hôm nay</option>
          <option value="week">Tuần này</option>
          <option value="month">Tháng này</option>
          <option value="custom">Tùy chọn</option>
        </select>
        {filter === "custom" && (
          <div className={styles.customRange}>
            <input
              type="date"
              value={customRange.from}
              onChange={e => setCustomRange({ ...customRange, from: e.target.value })}
            />
            <span>đến</span>
            <input
              type="date"
              value={customRange.to}
              onChange={e => setCustomRange({ ...customRange, to: e.target.value })}
            />
          </div>
        )}
      </div>

      <p className={styles.amount}>
        {amount} <span className={styles.up}>{change}</span>
      </p>
      <small>Doanh thu theo lựa chọn</small>
      <div className={styles.chartPlaceholder}>[Biểu đồ doanh thu]</div>
    </div>

  );
};

export default Revenue;

