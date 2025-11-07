import styles from '../../styles/productdetail.module.css';

export  function ColorSwatches() {
  return (
    <>
      <div className={styles.optionTitle}>Color: <strong style={{ marginLeft: '8px', fontWeight: 500, color: 'var(--muted)' }}>Black</strong></div>
      <div className={styles.swatches} id="swatches">
        <div className={`${styles.swatch} ${styles.selected}`} data-color="black" style={{ background: '#000' }}></div>
        <div className={styles.swatch} data-color="silver" style={{ background: '#d9d9dd' }}></div>
        <div className={styles.swatch} data-color="gold" style={{ background: '#cf9a00' }}></div>
      </div>
    </>
  );
}
