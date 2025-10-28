import { useCart } from "../Context/CartContext";
export function addToWishlist(productId) {
    console.log('Added to wishlist:', productId);
    // Add wishlist functionality here
    
    showNotification('Added to wishlist!');
}
export function addedButtonEffect(button) {
    button.classList.add('product-action-btn-clicked');
}
export function quickView(productId) {
    console.log('Quick view for product ID:', productId);
    showNotification('Quick view feature coming soon!');
}
export function showNotification(message) {
    // Simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}


export function ProductGenner({product,stars})
{
    const {  addToCart } = useCart();
    function addedToCart(productId) {
        addToCart({ ...product });
        console.log('Added to cart:', productId);
        // Add cart functionality here
        
        showNotification('Added to cart!');
}
    const  discountedPrice = product.isSale ? (((product.originalPrice - product.price)/product.originalPrice) * 100).toFixed(1) : 0;
    return (
      <>
      
      <div key={product.id} className="product-card fade-in">
                                <div className="product-image-container">
                                    <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                                
                                    <div className="product-badges">
                                        {product.isNew ? <span className="product-badge badge-new">New</span> : ''}
                                        {product.isSale ? <span className="product-badge badge-sale">-{discountedPrice}%</span> : ''}
                                    </div>
        
                                    <div className="product-actions">
                                        <button
                                            className="product-action-btn"
                                            onClick={(e) => {
                                                // toggle visual effect on the button
                                                addedButtonEffect(e.currentTarget);
                                                // perform wishlist logic
                                                addToWishlist(product.id);
                                            }}
                                            title="Add to Wishlist"
                                        >
                                            <i className="far fa-heart"></i>
                                        </button>
                                         <button className="product-action-btn" onClick={() => quickView(product.id)} title="Quick View">
                                             <i className="far fa-eye"></i>
                                         </button>
                                    </div>

                                    <div className="add-to-cart-overlay">
                                        <button className="add-to-cart-btn" onClick={() => { addedToCart(product.id); }} title="Add to Cart">
                                            <i className="fas fa-shopping-cart"></i>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>

                                <div className="product-info">
                                    <div className="product-brand">{product.brand}</div>
                                    <h3 className="product-name">{product.name}</h3>
                                    <div className="product-rating">
                                        {<div className="rating-stars">{stars}</div>}
                                        <span className="rating-text">({product.rating})</span>
                                    </div>
                                    <div className="product-price">
                                        <span className="price-current">${product.price.toLocaleString()}</span>
                                    {product.originalPrice ? <span className="price-original">${product.originalPrice.toLocaleString()}</span> : ''}
                                    </div>
                                </div>
                            </div>

      </>  
    );
}
