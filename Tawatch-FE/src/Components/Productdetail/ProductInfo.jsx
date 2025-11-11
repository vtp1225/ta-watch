import {ColorSwatches} from "./ColorSwatches.jsx";
import {StrapMaterialSelector} from "./StrapMaterialSelector.jsx";
import {QuantityPicker} from "./QuantityPicker.jsx";
import styles from '../../styles/productdetail.module.css';
export default function ProductInfo({ product }) {
  const colors = [
    { name: 'Black', hex: '#000000' },
    { name: 'Silver', hex: '#C0C0C0' },
    { name: 'Gold', hex: '#FFD700' },
    { name: 'Brown', hex: '#8B4513' },
  ];
  return (
    <div className={styles.details}>
      <span className={styles.badge}>New Arrival</span>
      <h1 className={styles.productName}>{product.name}</h1>
      <div className={styles.rating}>{product.rate} <span style={{ color: 'var(--muted)' }}>(247 reviews)</span></div>

      <div className={styles.priceRow}>
        <div className={styles.price}>{product.price}</div>
        <div className={styles.was}>{product.originalPrice}</div>
      </div>

      <p className={styles.lead}>
        {product.description}
      </p>

      <ColorSwatches colors={colors} />
      <StrapMaterialSelector />
      <QuantityPicker />

      <div className={styles.actions}>
        <button className={styles.add} id="addCart">
          <i className="fas fa-shopping-cart"></i>
           &nbsp; Thêm vào giỏ hàng
        </button>
        <button className={styles.fav} title="Add to wishlist">♡</button>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}>🚚 <span>Free Shipping</span></div>
        <div className={styles.feature}>🛡️ <span>2 Year Warranty</span></div>
        <div className={styles.feature}>↺ <span>30 Day Returns</span></div>
      </div>
    </div>
  );
}
