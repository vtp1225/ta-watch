import { createContext,useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export const CartContext = createContext(null);
export function CartProvider({children})
{
        const [cart, setCart] = useState({ items: [], totalQuantity: 0, totalPrice: 0 });
        useEffect(() => {
            const fetchCart = async () => {
                try {
                    const res = await axios.get('http://localhost:3000/cart');

                    setCart(res.data.data.cart);
                    console.log('Fetched cart:', res.data);
                } catch (err) {
                    console.error('Failed to fetch cart:', err);
                }
            };
            fetchCart();
        }, []);
        return (
            <CartContext.Provider value={{ cart, setCart }}>
                {children}
            </CartContext.Provider>
        );
}
export function useCart() {
    return useContext(CartContext);
}
