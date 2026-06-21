import Header from "../Components/Header";
import Hero from "../Components/Hero";
import CategorySection from "../Components/CategorySection";
import Products from "../Components/Products";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CategorySection />
      <Products title="Best Sellers" />
      <Footer />
    </>
  );
}

export default Home;