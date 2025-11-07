import styles from '../../styles/productdetail.module.css';
export function StrapMaterialSelector() {
  return (
    <>
      <div className={styles.optionTitle}>Strap Material</div>
      <div className={styles.materials}>
        <button className={`${styles.matBtn} ${styles.active}`}>Leather</button>
        <button className={styles.matBtn}>Metal</button>
        <button className={styles.matBtn}>Rubber</button>
      </div>
    </>
  );
}
