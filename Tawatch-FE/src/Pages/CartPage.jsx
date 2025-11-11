import { Header } from "../Components/Header.jsx";
import { Cart } from "../Components/cart/cart.jsx";
import { Footer } from "../Components/Footer.jsx";
import '../styles/globals.css';
import '../styles/main.css';
export function CartPage() {

    return (
      <>
        <Header />
        <Cart />
        <Footer />
      </>
    );
}