import { useCart } from "../Context/CartContext";
export function Cart() {
        const {cart} = useCart();
        return (
            <>
            {cart.items.length === 0 ? (  
                <div key={0} id="cartItems">
                    <div className="empty-cart">
                        <i className="fas fa-shopping-cart"></i>
                        <p>Your cart is empty</p>
                        <p>Add some watches to get started!</p>
                    </div>
                    </div>) : (
                    <div className="cart-items">
                        {cart.items.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.name} key={item.id} className="cart-item-image" />
                                <div className="cart-item-info">
                                    <div className="cart-item-name">{item.name}</div>
                                    <div className="cart-item-brand">{item.brand}</div>
                                    <div className="cart-item-price">{item.price.toLocaleString()}</div>
                                </div>
                                <div className="cart-item-actions">
                                    <button className="quantity-btn" onClick={() => {}}>-</button>
                                    <input type="number" className="quantity-input" value={item.quantity} 
                                        onChange={() => {}} min="1" />
                                    <button className="quantity-btn" onClick={() => {}}>+</button>
                                    <button className="remove-item-btn" onClick={() => {}} title="Remove item">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                    ))}
                </div>
            )}
            </>
        )
}

