import styles from "../styles/testimonials.module.scss";
import TestimonialsList from "../components/testimonials-list";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import fakeData from "../fake_data.json";

export default function Testimonials() {
  return (
    <div className={styles.container}>
      <Topbar />
      <Navbar data={fakeData.navLinks} type="main" />
      <Hero pageName="testimonials" />
      <div className={styles.main}>
        <TestimonialsList data={fakeData.testimonials} />
      </div>
    </div>
  );
}
