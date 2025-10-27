export function Footer() {

    return(<>
     <footer className="footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>TAWatch</h3>
                    <p>Your trusted partner for premium timepieces. We've been crafting moments of excellence since 2010.</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#collections">Collections</a></li>
                        <li><a href="#">Brands</a></li>
                        <li><a href="#">Sale</a></li>
                        <li><a href="#">Gift Cards</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Shipping Info</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Stay Updated</h4>
                    <p>Subscribe to our newsletter for the latest collections and exclusive offers.</p>
                    <div className="newsletter">
                        <input type="email" placeholder="Enter your email" id="newsletterEmail" />
                        <button className="btn btn-primary">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="contact-info">
                    <div className="contact-item">
                        <i className="fas fa-phone"></i>
                        <div>
                            <div className="contact-label">Phone</div>
                            <div className="contact-value">+1 (555) 123-4567</div>
                        </div>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <div>
                            <div className="contact-label">Email</div>
                            <div className="contact-value">info@tawatch.com</div>
                        </div>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <div className="contact-label">Address</div>
                            <div className="contact-value">123 Watch St, Time City, TC 12345</div>
                        </div>
                    </div>
                </div>
                <div className="footer-legal">
                    <div className="copyright">© 2024 TAWatch. All rights reserved.</div>
                    <div className="legal-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    </>)
}