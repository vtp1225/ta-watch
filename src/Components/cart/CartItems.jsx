
export function CartItems({ items, onUpdateQuantity, onRemoveItem }) {
    return (
        <>
        {items.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.images[0]} alt={item.name} key={item.id} className="cart-item-image" />
                                <div className="cart-item-info">
                                    <div className="cart-item-name">{item.name}</div>
                                    <div className="cart-item-brand">{item.brand}</div>
                                    <div className="cart-item-price">{item.price.toLocaleString()}</div>
                                </div>
                                <div className="cart-item-actions">
                                    <button className="quantity-btn" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                                    <input type="number" className="quantity-input" value={item.quantity}
                                        onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value) || 0)} min="1" />
                                    <button className="quantity-btn" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                                    <button className="remove-item-btn" onClick={() => onRemoveItem(item.id)} title="Remove item">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                    ))}
        </>);
}
