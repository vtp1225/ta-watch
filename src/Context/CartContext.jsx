import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export const CartContext = createContext(null);
export function CartProvider({ children }) {
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
    function addToCart(product) {
        setCart(prevCart => {
            const existingItem = prevCart.items.find(item => item.id === product.id);
            let updatedItems;

            if (existingItem) {
                updatedItems = prevCart.items.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1, subtotal: item.subtotal + product.price }
                        : item
                );
            } else {
                updatedItems = [...prevCart.items, { ...product, quantity: 1, subtotal: product.price }];
            }

            const updatedCart = {
                items: updatedItems,
                totalQuantity: prevCart.totalQuantity + 1,
                totalPrice: prevCart.totalPrice + product.price
            };

            console.log('Updated cart:', updatedCart);
            return updatedCart;
        });
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}
export function useCart() {
    return useContext(CartContext);
}
