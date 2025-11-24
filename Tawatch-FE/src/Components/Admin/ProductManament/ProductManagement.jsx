import React from "react";
import styles from "../Css/ProductManagement.module.css";
import Sidebar from "../AdminDashboard/Sidebar";
import { ProductContext } from "../../../Context/ProductContext";

export default function ProductManagement() {
    const { products } = React.useContext(ProductContext);
    const [activeIndex, setActiveIndex] = React.useState(1);
  return (

    <div className={styles.container}>
        <Sidebar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <div className={styles.main}>
      <div className={styles.header}>
        <h2>Product Management</h2>
        <p>Manage your watch inventory</p>
      </div>

      <div className={styles.box}>
        <div className={styles.boxHeader}>
          <h3>All Products</h3>

          <div className={styles.rightActions}>
            <input
              type="text"
              className={styles.search}
              placeholder="Search products..."
            />
            <button className={styles.addBtn}>+ Add Product</button>
          </div>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

                {products.map((p, idx) => (
                    <tr key={idx}>
                    <td>
                        <img src={p.images[0]} className={styles.thumb} />
                        {p.name}
                    </td>
                    <td><span className={`${styles.tag} ${styles.luxury}`}>{p.category}</span></td>
                    <td>{p.price}</td>
                    <td>{p.stock}</td>
                    <td><span className={`${styles.status} ${p.inStock ? styles.in : styles.out}`}>{p.inStock ? "In Stock" : "Out of Stock"}</span></td>
                    <td className={styles.actions}>
                      <span className={styles.view} title="Xem sản phẩm"><i className="fas fa-eye"></i></span>
                      <span className={styles.edit} title="Chỉnh sửa sản phẩm"><i className="fas fa-edit"></i></span>
                      <span className={styles.delete} title="Xóa sản phẩm"  ><i className="fas fa-trash"></i></span>
                    </td>
                    </tr>
                ))}

          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
