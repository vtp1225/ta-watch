import styles from '../../styles/productdetail.module.css';

export default function Thumbs({ chooseIndex, images }) {
  return (
    <div className={styles.thumbs} id="thumbs">
      {images.map((image, index) => (
        <div className={`${styles.thumb} ${chooseIndex === index ? styles.active : ''}`} key={index}>
          <img src={image} alt={`thumb-${index}`} />
        </div>
      ))}
    </div>
  );
}
