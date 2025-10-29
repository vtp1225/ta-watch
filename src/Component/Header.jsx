import React from "react";
import { useCart } from "../Context/CartContext";
export function Header() {
    const { cart } = useCart();
    console.log("cart in header",cart)
    const handleCartClick = () => {
        // chuyển hướng tới trang cart
        window.location.href = '/cartpage';
    };
    const handleUserClick = () => {
        // chuyển hướng tới trang login
        window.location.href = '/login';
    }
    
    return(
        <>
        <header className="header">
        <div className="container">
            <div className="header-content">
                <div className="logo">
                    <a className="logo" href="/"><img className="logo-img" src="/logoPNG.png" alt="TAWatch Logo" /></a>
                </div>

                <nav className="nav" id="nav">
                    <ul className="nav-list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#collections">Collections</a></li>
                        <li><a href="#brands">Brands</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Search watches..." id="searchInput" />
                    <i className="fas fa-search search-icon"></i>
                </div>

                <div className="header-actions">
                    <button className="action-btn" id="wishlistBtn">
                        <i className="far fa-heart"></i>
                    </button>
                    <button className="action-btn" id="userBtn" onClick={handleUserClick}>
                        <i className="far fa-user"></i>
                    </button>
                    <button className="action-btn cart-btn" id="cartBtn" onClick={handleCartClick}>
                        <i className="fas fa-shopping-cart"></i>
                        <span className="cart-count" id="cartCount" >{cart.items.length > 0 ? cart.items.reduce((acc, item) => acc + item.quantity, 0) : 0}</span>
                    </button>
                    <button className="mobile-menu-btn" id="mobileMenuBtn">s
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>
        </>
    ); 
        
}