import { Header } from "../Component/Header.jsx";
import { Cart } from "../Component/cart.jsx";
import { Footer } from "../Component/Footer.jsx";
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