import Thumbs from "./Thumbs";
import styles from '../../styles/productdetail.module.css';

export default function Gallery({ images }) {
  return (
    <div className={styles.gallery}>

      <div className={styles.hero}>
        <div className={`${styles.arrow} ${styles.left}`} id="prevBtn" title="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <img id="mainImage" src={images[0]} alt="Main watch"/>

        <div className={`${styles.arrow} ${styles.right}`} id="nextBtn" title="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <Thumbs images={images} />
    </div>
  );
}
