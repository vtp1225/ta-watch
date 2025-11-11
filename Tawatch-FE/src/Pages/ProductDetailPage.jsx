
import { useParams } from "react-router";
import Gallery from "../Components/Productdetail/Gallery.jsx";
import ProductInfo from "../Components/Productdetail/ProductInfo.jsx";
import { useProducts } from "../Context/ProductContext.jsx";
import styles from '../styles/productdetail.module.css';
import { Header } from "../Components/Header.jsx";
import { Footer } from "../Components/Footer.jsx";
export default function ProductDetailPage() {
    const { id } = useParams();
    const { getProductById } = useProducts();
    const product = getProductById(id);
  return (
    <>
    <Header />

    <div className={styles.page}>
      <Gallery images={product.images} />
      <ProductInfo product={product} />
    </div>
    <Footer />
    </>
  );
}
