import { Header } from "../Component/Header.jsx";
import { HeroContent } from "../Component/HeroContent.jsx";
import{FeaturedSection} from "../Component/FeaturedSection.jsx";
import { ProductsHome } from "../Component/ProductsHome.jsx";
import { Footer } from "../Component/Footer.jsx";
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