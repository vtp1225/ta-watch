import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosApi";
export const CartContext = createContext(null);
export function CartProvider({ children }) {
    const [cart, setCart] = useState({ items: [], totalQuantity: 0, totalPrice: 0 });
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await axiosClient.get('/cart');
                setCart(res.data.cart);
            } catch (err) {
                console.error('Failed to fetch cart:', err);
            }
        };
        fetchCart();
    }, []);
    async function addToCart(product) {
      try {
        const res = await axiosClient.get('/cart');
        const existingCart = res.data.cart;
        const items = [...existingCart.items];
        const productInCart = items.find(item => item.id === product.id);
        if (productInCart) {
          productInCart.quantity += 1;
        } else {
          const newProduct = {id: product.id, name: product.name, brand: product.brand, price: product.price, image: product.image, quantity: 1};
          items.push(newProduct);
        }
        console.log('Updated items:', items);
        const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
        const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const updatedAt = new Date().toISOString();
        const updatedCart = { items, totalQuantity, totalPrice, updatedAt };

        await axiosClient.put("/cart", { cart: updatedCart });
        setCart(updatedCart);
      } catch (error) {
        console.error('Failed to add item to cart:', error);
      }
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
