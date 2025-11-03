export default function ImageGallery({ images }) {

  return (
    <div className="image-gallery">
      <img src={images[0]} className="main-image" />

      <div className="thumb-row">
        {images.map((img, i) => (
          <img key={i} src={img} className="thumb-img" />
        ))}
      </div>
    </div>
  );
}
