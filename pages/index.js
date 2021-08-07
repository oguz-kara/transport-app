import styles from "../styles/Home.module.scss";
import GetTaxiForm from "../components/get-taxi-form";
import HomeHero from "../components/home-hero.js";
import ServicesSection from "../components/services-section";
import TariffsSection from "../components/tariffs-section";
import GetMobileSection from "../components/get-mobile-section";
import TestimonialsSection from "../components/testimonials-section";
import Navbar from "../components/navbar";
export default function Home() {
  return (
    <div className={styles.container}>
      <HomeHero>
        <Navbar type="static" />
      </HomeHero>
      <GetTaxiForm noHeader fullWidth />
      <ServicesSection />
      <TariffsSection yellowTitle="see our" title="tariffs" />
      <GetMobileSection />
      <TestimonialsSection />
    </div>
  );
}
