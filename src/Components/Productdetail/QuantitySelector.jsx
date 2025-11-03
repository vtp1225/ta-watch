export default function QuantitySelector() {
  return (
    <div className="quantity-control">
      <button>-</button>
      <input type="number" value={1} readOnly />
      <button>+</button>
    </div>
  );
}
