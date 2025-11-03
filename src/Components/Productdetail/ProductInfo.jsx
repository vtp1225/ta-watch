import ColorPicker from "./ColorPicker";
import StrapSelector from "./StrapSelector";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCartButton";

export default function ProductInfo({ product }) {
  return (
    <div className="product-info">
      <h2>{product.name}</h2>
      <p>{product.rating} (247 reviews)</p>
      <h3>${product.price} <span className="old-price">${product.oldPrice}</span></h3>

      <p>
        {product.description}
      </p>

      <ColorPicker />
      <StrapSelector />
      <QuantitySelector />
      <AddToCartButton />
    </div>
  );
}
