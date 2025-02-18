import CatalogueForm from "./components/CatalogueForm";
import HorecaSubscriptionBanner from "./components/HorecaSubscriptionBanner";
import Features from "./components/Feauters";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WareStore from "./components/WareStore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FreeShippingBanner from "./components/FreeShippingBanner";
import ProfileSection from "./components/ProfileSection";
import ReviewSection from "./components/ReviewSection";
import ClientsList from "./components/ClientsList";


function App() {
  return (
    <div>
      <FreeShippingBanner/>
      <Navbar/>
      <HorecaSubscriptionBanner/>
      <ProfileSection/>
      <Features />
      <ReviewSection/>
      <ClientsList />
      <WareStore />
      <CatalogueForm />
      <Footer />
    </div>
  );
}

export default App;
