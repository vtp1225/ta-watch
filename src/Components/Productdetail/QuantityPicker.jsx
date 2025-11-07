import styles from '../../styles/productdetail.module.css';
export function QuantityPicker() {
  return (
    <>
      <div className={styles.optionTitle}>Quantity</div>
      <div className={styles.qty}>
        <button id="decBtn">-</button>
        <input id="qtyInput" type="text" value={1} readOnly />
        <button id="incBtn">+</button>
      </div>
    </>
  );
}
