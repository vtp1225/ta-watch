
import { useCart } from "../Context/CartContext";
export function Cart() {
        const {cart,updatedcart,deleteCart} = useCart();   

        return (
            <>
            <div className="cart-header">
            <h2><i className="fas fa-shopping-cart"></i> Giỏ hàng của bạn</h2></div>

            {cart.items.length === 0 ? (  
                <div key={0} id="cartItems">
                    <div className="empty-cart">
                        <i className="fas fa-shopping-cart"></i>
                        <p>Giỏ hàng của bạn đang trống</p>
                        <p>Thêm một số đồng hồ để bắt đầu!</p>
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
                                    <button className="quantity-btn" onClick={() => updatedcart(item.id, item.quantity - 1)}>-</button>
                                    <input type="number" className="quantity-input" value={item.quantity}
                                        onChange={(e) => updatedcart(item.id, parseInt(e.target.value) || 0)} min="1" />
                                    <button className="quantity-btn" onClick={() => updatedcart(item.id, item.quantity + 1)}>+</button>
                                    <button className="remove-item-btn" onClick={() => deleteCart(item.id)} title="Remove item">
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

