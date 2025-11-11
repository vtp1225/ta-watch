
export function FeaturedSection() {
    return (<>        
        <section className="featured-section">
            <div className="container">
                <div className="featured-content">
                    <div className="featured-text">
                        <span className="badge">Limited Edition</span>
                        <h2>Swiss Heritage Collection</h2>
                        <p>Experience the pinnacle of Swiss watchmaking with our exclusive Heritage Collection. Each timepiece is meticulously crafted using traditional techniques passed down through generations.</p>
                        <ul className="feature-list">
                            <li>Hand-assembled by master craftsmen</li>
                            <li>Swiss automatic movement</li>
                            <li>Sapphire crystal glass</li>
                            <li>Water resistant to 100m</li>
                        </ul>
                        <div className="featured-buttons">
                            <button className="btn btn-primary">Explore Collection</button>
                            <button className="btn btn-outline">Watch Catalog</button>
                        </div>
                    </div>
                    <div className="featured-images">
                        <div className="image-grid">
                            <div className="image-column">
                                <img src="https://images.unsplash.com/photo-1708551452682-3f969fb4b38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGNsb3NldXB8ZW58MXx8fHwxNzU5MjE1ODEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Swiss Heritage Watch" />
                                <img src="https://images.unsplash.com/photo-1705002599941-face1aaef451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwd2F0Y2glMjBsZWF0aGVyfGVufDF8fHx8MTc1OTI4MzkzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Swiss Heritage Watch" />
                            </div>
                            <div className="image-column offset">
                                <img src="https://images.unsplash.com/photo-1704783508626-b5359276703b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwd2F0Y2glMjBsdXh1cnl8ZW58MXx8fHwxNzU5MjQ3ODEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Swiss Heritage Watch" />
                                <img src="https://images.unsplash.com/photo-1730757679771-b53e798846cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2F0Y2glMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc1OTI4MzkzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Swiss Heritage Watch" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
        )
        }