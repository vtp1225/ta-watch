export function HeroContent() {
    return (<>
    <section className="hero" id="home">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h2 className="hero-title">
                            Vẻ đẹp vượt <br />
                            <span className="text-primary">THỜI GIAN  </span>
                        </h2>
                        <p className="hero-description"> 
                            Thiết kế tinh xảo, chất liệu cao cấp và độ chính xác tuyệt đối, đây là lựa chọn dành cho những người không ngừng tiến về phía trước.Hãy để từng khoảnh khắc trên cổ tay bạn trở thành dấu ấn của sự khác biệt.
                        </p> 
                        <div className="hero-buttons">
                            <a href="#collections" className="btn btn-primary shopcollection-btn"  >Shop Collection</a>
                            <a href="#catalog" className="btn btn-outline viewcatalog-btn">View Catalog</a>
                        </div>
                        <div className="hero-stats">
                            <div className="stat">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Premium Brands</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">1000+</div>
                                <div className="stat-label">Happy Customers</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">2 Years</div>
                                <div className="stat-label">Warranty</div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image">
                    </div>
                </div>
            </div>
        </section></>
        )
}