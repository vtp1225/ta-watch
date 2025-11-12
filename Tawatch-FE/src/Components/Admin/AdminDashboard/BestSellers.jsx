import React from "react";
import styles from "../Css/BestSellers.module.css";

const BestSellers = ({ products }) => {
  return (
    <div className={styles.bestsellers}>
      <h2>Best Selling Products</h2>
      <ul>
        {products.map((p, idx) => (
          <li key={idx}>
            <div>
              <p className={styles.productName}>{p.name}</p>
              <small>{p.sold} sold</small>
            </div>
            <p className={styles.price}>{p.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestSellers;
