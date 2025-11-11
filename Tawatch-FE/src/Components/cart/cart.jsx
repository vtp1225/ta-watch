import { CartItems } from "./CartItems";
import { useCart } from "../../Context/CartContext";
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
                        <CartItems items={cart.items} onUpdateQuantity={updatedcart} onRemoveItem={deleteCart} />
                </div>
            )}
            </>
        )
}

