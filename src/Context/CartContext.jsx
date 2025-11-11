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
        setCart(res.data);
      } catch (err) {
        console.error('Failed to fetch cart:', err);
      }
    };
    fetchCart();
  }, []);
  async function addToCart(product) {
    try {
      const existingCart = cart;
      const items = [...existingCart.items];
      const productInCart = items.find(item => item.id === product.id);
      if (productInCart) {
        productInCart.quantity += 1;
      } else {
        const newProduct = { id: product.id, name: product.name, brand: product.brand, price: product.price, images: product.images, quantity: 1 };
        items.push(newProduct);
      }
      const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
      const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const updatedAt = new Date().toISOString();
      const updatedCart = { items, totalQuantity, totalPrice, updatedAt };
      console.log("cart to add", updatedCart);
      await axiosClient.put("/cart", updatedCart);
      setCart(updatedCart);
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  }
  async function updatedcart(productId, newQuantity) {
    const newItems = cart.items.map(item => {
      if(item.id===productId)
        item.quantity=newQuantity;
      return item;
    });
    const totalQuantity = newItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = newItems.reduce((acc,item) => acc+ item.quantity*item.price,0);
    setCart(
      {items: newItems,
        totalPrice: totalPrice,
        totalQuantity: totalQuantity
      }
      );
    await axiosClient.put("/cart", {items: newItems, totalQuantity: totalQuantity, totalPrice: totalPrice});
  }
  async function deleteCart (productId) {
    const newCartItems = cart.items.filter(item => item.id!==productId);
    const totalQuantity = newCartItems.reduce((acc,item) => acc + item.quantity, 0);
    const totalPrice = newCartItems.reduce((acc,item) => acc + item.price * item.quantity, 0);
    const updatedCart = { items: newCartItems, totalQuantity, totalPrice };
    await axiosClient.put(`/cart`,updatedCart);
    setCart(updatedCart);

  }
  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, updatedcart, deleteCart }}>
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  return useContext(CartContext);
}
