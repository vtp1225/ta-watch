import styles from "../Css/DashboardLayout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faChartLine, faBox, faCartShopping, faUsers, faGear } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const Sidebar = ({activeIndex,setActiveIndex}) => {

  const menuItems = [
    { to: "/admin", icon: faChartLine, text: "Tổng quan" },
    { to: "/admin/products", icon: faBox, text: "Quản lý sản phẩm" },
    { to: "/admin/orders", icon: faCartShopping, text: "Quản lý đơn hàng" },
    { to: "/admin/customers", icon: faUsers, text: "Khách hàng" },
    { to: "/admin/settings", icon: faGear, text: "Cài đặt" },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <FontAwesomeIcon icon={faClock} />
        </div>
        <div>
          <h2>TA Watch</h2>
          <p>Trang Admin</p>
        </div>
      </div>

      <ul className={styles.menu}>
        {menuItems.map((item, idx) => (
          <li
            key={item.to}
            onClick={() => setActiveIndex(idx)}
            className={activeIndex === idx ? styles.active : undefined}
          >
            <Link to={item.to}>
              <FontAwesomeIcon icon={item.icon} /> {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
