import { useState, useEffect } from "react";
import { ProductGenner } from "./ProductGenner.jsx";
import '../../styles/main.css';
import { useProducts } from "../../Context/ProductContext.jsx";
export function ProductsHome() {
    const { products} = useProducts();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentSort, setCurrentSort] = useState('featured');
    const [currentBrand, setCurrentBrand] = useState('all');
    const [currentCategory, setCurrentCategory] = useState('all');
    const [displayedCount, setDisplayedCount] = useState(6);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);
    function handleCategoryClick(category, buttonElement) {
        setCurrentCategory(category);
        const buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(btn => btn.classList.toggle('active', btn === buttonElement));
        filterProducts(category, currentBrand);
        setDisplayedCount(6);
    }

    function filterProducts(category = currentCategory, brand = currentBrand) {
        const result = products.filter(product => {
            const categoryMatch = category === 'all' || (product.category || '').toLowerCase() === category.toLowerCase();
            const brandMatch = brand === 'all' || (product.brand || '') === brand;
            return categoryMatch && brandMatch;
        });
        setFilteredProducts(result);
        setDisplayedCount(6);
    }

    function generateStars(rating = 0) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) stars += '★';
            else stars += '☆';
            if (i === fullStars - 1 && hasHalfStar) {
                stars = stars.slice(0, -1) + '⯨'; // Using a different character for half star
            }
        }
        return stars;
    }

    function sortProducts(sortKey = currentSort) {
        setCurrentSort(sortKey);
        setFilteredProducts(prev => {
            const copy = [...prev];
            copy.sort((a, b) => {
                switch (sortKey) {
                    case 'price-low':
                        return (a.price || 0) - (b.price || 0);
                    case 'price-high':
                        return (b.price || 0) - (a.price || 0);
                    case 'rating':
                        return (b.rating || 0) - (a.rating || 0);
                    case 'newest':
                        if (a.isNew && !b.isNew) return -1;
                        if (!a.isNew && b.isNew) return 1;
                        return 0;
                    default:
                        return 0;
                }
            });
            return copy;
        });
    }

    function LoadMore() {
        setDisplayedCount(prev => Math.min(prev + 6, filteredProducts.length));
    }

    return (
        <>
            <section className="products-section" id="collections">
                <div className="container pdct">
                    <div className="section-header">
                        <h2>Our Collection</h2>
                        <p>Explore our carefully curated selection of premium timepieces from the world's finest watchmakers</p>
                    </div>

                    <div className="filters">
                        <div className="filter-categories">
                            <button className="filter-btn active" data-category="all" onClick={(e) => { handleCategoryClick('all', e.currentTarget) }}>All</button>
                            <button className="filter-btn" data-category="luxury" onClick={(e) => { handleCategoryClick('luxury', e.currentTarget) }}>Luxury</button>
                            <button className="filter-btn" data-category="sport" onClick={(e) => { handleCategoryClick('sport', e.currentTarget) }}>Sport</button>
                            <button className="filter-btn" data-category="smart" onClick={(e) => { handleCategoryClick('smart', e.currentTarget) }}>Smart</button>
                            <button className="filter-btn" data-category="vintage" onClick={(e) => { handleCategoryClick('vintage', e.currentTarget) }}>Vintage</button>
                            <button className="filter-btn" data-category="gold" onClick={(e) => { handleCategoryClick('gold', e.currentTarget) }}>Gold</button>
                        </div>
                        <div className="filter-controls">
                            <label htmlFor="brandFilter" className="filter-label">Thương Hiệu</label>
                            <select className="select-dropdown" onChange={(e) => { setCurrentBrand(e.target.value); filterProducts(currentCategory, e.target.value); }} id="brandFilter">
                                <option value="all">All</option>
                                <option value="TimeMaster">TimeMaster</option>
                                <option value="ActiveTime">ActiveTime</option>
                                <option value="LuxuryTime">LuxuryTime</option>
                                <option value="TechTime">TechTime</option>
                                <option value="Heritage">Heritage</option>
                                <option value="RoyalTime">RoyalTime</option>
                            </select>
                            <label htmlFor="Filter" className="filter-label">Lọc</label>
                            <select className="select-dropdown" id="sortBy" onChange={(e) => { sortProducts(e.target.value); }}>
                                <option value="featured">Featured</option>
                                <option value="newest">Newest</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                            </select>
                        </div>
                    </div>

                    <div className="product-grid" id="productGrid">
                        {
                            filteredProducts.length === 0 ? (
                                <p>No products found.</p>
                            ) : (
                                filteredProducts.slice(0, displayedCount).map(product => (
                                    <ProductGenner key={product.id} product={product} stars={generateStars(product.rating)} />
                            ))
                        )}
                    </div>

                    <div className="load-more">
                        <button className="btn btn-outline" onClick={() => LoadMore()} id="loadMoreBtn">Load More Products</button>
                    </div>
                </div>
            </section>
        </>
    );
}
