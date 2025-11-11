import styles from '../../styles/productdetail.module.css';

export  function ColorSwatches({colors}) {
  function handleSwatchClick(event) {
    const selectedColor = event.target.getAttribute('data-color');
    const swatchContainer = document.getElementById('swatches');
    const swatches = swatchContainer.getElementsByClassName(styles.swatch);
    const colorname = swatchContainer.previousSibling.querySelector('strong');
    colorname.textContent = selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1);
    for (let swatch of swatches) {
      swatch.classList.remove(styles.selected);
      if (swatch.getAttribute('data-color') === selectedColor) {
        swatch.classList.add(styles.selected);
      }
    }
  }
  return (
    <>
      <div className={styles.optionTitle}>Color: <strong style={{ marginLeft: '8px', fontWeight: 500, color: 'var(--muted)' }}>{colors[0].name}</strong></div>
      <div className={styles.swatches} id="swatches">
            {colors.map((color, index) => (
              <div
                onClick={handleSwatchClick}
                key={index}
                className={`${styles.swatch} ${index === 0 ? styles.selected : ''}`}
                data-color={color.name.toLowerCase()}
                style={{ background: color.hex }}
              ></div>
            ))}
      </div>
    </>
  );
}
