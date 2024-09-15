import Header from "../components/Header";
import SalesBanner from "../components/SalesBanner";
import Carousel from "../components/Carousel";
import FeaturedProducts from "../components/FeaturedProducts";
import NewsletterBanner from "../components/NewsletterBanner";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import Values from "../components/Values";
import SimilarTitle from "../components/SimilarTitle";
import ProductsCarousel from "../components/ProductsCarousel";

function Homepage() {
  return (
    <div className="flex flex-col items-center">
      <SalesBanner />
      <Header />
      <Carousel />
      <FeaturedProducts />
      <SimilarTitle 
        title={'New Arrivals'}
        className="max-w-7xl px-12 pt-12" 
      />
      <ProductsCarousel className="max-w-[74rem] pt-4"/>
      <Values />
      <AdBanner />
      <NewsletterBanner />
      <Footer />
    </div>
  );
}

export default Homepage;
