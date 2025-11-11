import React, { useState, useRef, useEffect } from "react";
import { MenuItems } from "./MenuItems";
import { useCart } from "../Context/CartContext";
export function Header() {
    const { cart } = useCart();
    const [isOpen, setIsOpen] = useState(false);
    console.log("cart in header", cart)
    const brandItems = [{ label: "Rolex", image: "./logo-thuonghieu1.png", onClick: "/rolex" },
    { label: "Omega", image: "./logothuonghieu2.png", onClick: "/omega" },
    { label: "Rolex", image: "./logo-thuonghieu1.png", onClick: "/rolex" },
    { label: "Omega", image: "./logothuonghieu2.png", onClick: "/omega" },
    { label: "Rolex", image: "./logo-thuonghieu1.png", onClick: "/rolex" },
    { label: "Rolex", image: "./logo-thuonghieu1.png", onClick: "/rolex" },
    { label: "Rolex", image: "./OrientLogo.png", onClick: "/rolex" },
    { label: "Rolex", image: "./logo-thuonghieu1.png", onClick: "/rolex" },
    { label: "Rolex", image: "./OrientLogo.png", onClick: "/rolex" },
    { label: "Rolex", image: "./logo-thuonghieu1.png", onClick: "/rolex" },
    { label: "Rolex", image: "./OrientLogo.png", onClick: "/rolex" }

    ];
    

    const handleCartClick = () => {
        // chuyển hướng tới trang cart
        window.location.href = '/cartpage';
    };
    const handleUserClick = () => {
        // chuyển hướng tới trang login
        window.location.href = '/login';
    }
    const currentRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (currentRef.current && !currentRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <>
            <header className="header">
                    <div className="header-content">
                        <div className="logo">
                            <a className="logo" href="/"><img className="logo-img" src="/logoPNG.png" alt="TAWatch Logo" /></a>
                        </div>

                        <nav className="nav" id="nav">
                            <ul className="nav-list">
                                <li href="#home"><a href="#">Trang Chủ</a></li>
                                <li href="#collections"><a href="#collections">Đồng Hồ</a></li>
                                <li href="#brands"
                                    onMouseEnter={() => { setIsOpen(true) }}
                                    onMouseLeave={() => { setIsOpen(false) }}
                                ><a style={{ color: isOpen ? `#ffb300` : '' }} href="#brands"
                                    ref={currentRef}
                                >Thương Hiệu</a>
                                    {isOpen &&
                                        <MenuItems className="menuitems"
                                            items={brandItems} />
                                    }
                                </li>

                                <li href="#about"><a href="#about">About</a></li>
                                <li href="#contact"><a href="#contact">Contact</a></li>
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
                            <button className="mobile-menu-btn" id="mobileMenuBtn">
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>
                    </div>
                
            </header>
        </>
    );

}