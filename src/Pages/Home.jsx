import { Header } from "../Components/Header.jsx";
import { HeroContent } from "../Components/HeroContent.jsx";
import{FeaturedSection} from "../Components/FeaturedSection.jsx";
import { ProductsHome } from "../Components/Product/ProductsHome.jsx";
import { Footer } from "../Components/Footer.jsx";
import '../styles/globals.css';
import '../styles/main.css';
export function Home() {

  
    return (
      <>
        <Header />
        <HeroContent />
        <FeaturedSection />
        <ProductsHome  />
        <Footer />
      </>
    );
}