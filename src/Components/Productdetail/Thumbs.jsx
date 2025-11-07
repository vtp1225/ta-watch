import styles from '../../styles/productdetail.module.css';

export default function Thumbs({ images }) {
  return (
    <div className={styles.thumbs} id="thumbs">
      {images.map((image, index) => (
        <div className={styles.thumb} key={index}>
          <img src={image} alt={`thumb-${index}`} />
        </div>
      ))}
    </div>
  );
}
