import Thumbs from "./Thumbs";
import styles from '../../styles/productdetail.module.css';
import { useState } from "react";
export default function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleNext() {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  }

  function handlePrev() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  }

  return (
    <div className={styles.gallery}>

      <div className={styles.hero}>
        <div onClick={handlePrev} className={`${styles.arrow} ${styles.left}`} id="prevBtn" title="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <img id="mainImage" src={images[currentIndex]} alt="Main watch"/>

        <div onClick={handleNext} className={`${styles.arrow} ${styles.right}`} id="nextBtn" title="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <Thumbs chooseIndex={currentIndex} images={images} />
    </div>
  );
}
