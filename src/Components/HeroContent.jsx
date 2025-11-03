import { useState, useEffect } from "react";
export function HeroContent() {
    const slides = [
    {
        title: <>Vẻ đẹp vượt <br /><span className="text-primary">THỜI GIAN</span></>,
        desc: "Thiết kế tinh xảo, chất liệu cao cấp và độ chính xác tuyệt đối...",
        img: "./backgroundsang.png",
        background:"./OrientBack.webp"
    },
    {
        title: <>Đẳng cấp từ <br /><span className="text-primary">THƯƠNG HIỆU LỚN</span></>,
        desc: "Những mẫu đồng hồ mang dấu ấn huyền thoại trong ngành chế tác...",
        img: "./rolex-logo.png",
        background:"./final.png "

    },
    {
        title: <>Khoảnh khắc <br /><span className="text-primary">TRỌN VẸN</span></>,
        desc: "Trải nghiệm đỉnh cao dành cho người đi đầu xu hướng...",
        img: "./casiologo.png",
        background:"./casioBack.avif"

    }
];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);
    
    return (<>
    <section className="hero-slider">
      <div className="slides-wrapper" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide, i) => (
          <div className="slide hero" style={{backgroundImage: `url(${slide.background})`}} key={i}>
            <div className="container  hero-content">
              <div className="hero-text">
                <img className="hero-logo-img" src={slide.img} alt="" />
                <h2 className="hero-title">{slide.title}</h2>
                <p className="hero-description">{slide.desc}</p>
             <div className="hero-buttons"> 
                <a href="#collections" className="btn btn-primary shopcollection-btn" >Shop Collection</a> 
             <a href="#catalog" className="btn btn-outline viewcatalog-btn">View Catalog</a> </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dots">
        {slides.map((_, i) => (
          <span 
            key={i} 
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section></>
        )
}