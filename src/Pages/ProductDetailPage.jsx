import ImageGallery from "../Components/Productdetail/ImageGallery";
import ProductInfo from "../Components/Productdetail/ProductInfo.jsx";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { useParams } from "react-router";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext.jsx";
export default function ProductDetailPage() {
    const productID = useParams().id;
    const { getProductById } =  useContext(ProductContext);
    const product = getProductById(productID);
  return (
    <>
    <Header />
    <div className="product-page">
      <ImageGallery images={product.images} />
      <ProductInfo product={product} />
    </div>
    <Footer />
    </>
  );
}
