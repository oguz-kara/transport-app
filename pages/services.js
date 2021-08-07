import Head from "next/head";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import TariffsSection from "../components/tariffs-section";
import styles from "../styles/services.module.scss";
import ServicesSection from "../components/services-section";
import TestimonialsSection from "../components/testimonials-section";

export default function Services() {
  return (
    <div className={styles.container}>
      <Topbar />
      <Navbar type="main" />
      <div className={styles.servicesContainer}>
        <ServicesSection>
          Null egestas ante sit amet tincidunt bibendum. Duis id aliquet tellus,
          ut iaculis orci. Suspendisse efficitur ornare neque, rhoncus viverra
          dui semper in. Ut nec gravida enim. Maecenas viverra elit id nulla
          euismod tempus. Proin hendrerit nibh mauris, eget mollis ex elementum
          vel. Sed facilisis scelerisque viverra.
        </ServicesSection>
      </div>
      <TariffsSection
        title="tariffs"
        yellowTitle="see our"
        backgroundUrl="/assets/images/_tariff-bg.jpg"
        titleColor="#fff"
      />
      <TestimonialsSection />
    </div>
  );
}
