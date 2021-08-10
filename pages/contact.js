import fakeData from "../fake_data.json";
import SendMessageSection from "../components/send-message-section";
import ContactSection from "../components/contact-section";
import styles from "../styles/contact.module.scss";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import Hero from "../components/hero";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Topbar />
      <Navbar type="main" data={fakeData.navLinks} />
      <Hero pageName="contact" />
      <div className={styles.main}>
        <ContactSection />
        <SendMessageSection />
      </div>
    </div>
  );
}
