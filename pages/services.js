import Head from "next/head";
import Hero from "../components/hero";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import TariffsSection from "../components/tariffs-section";
import styles from "../styles/services.module.scss";
import ServicesSection from "../components/services-section";
import TestimonialsSection from "../components/testimonials-section";
import fakeData from "../fake_data.json";

export default function Services() {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Services</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />
      <Navbar type="main" data={fakeData.navLinks} />
      <Hero pageName="services" />
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
      <TestimonialsSection data={fakeData.testimonials} />
    </div>
  );
}
