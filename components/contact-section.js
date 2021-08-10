import styles from "../styles/contact-section.module.scss";
import {
  Phone,
  LocationOn,
  Facebook,
  YouTube,
  Twitter,
  Instagram,
} from "@material-ui/icons";

export default function ContactSection() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>opening hours</span>
        <span className={styles.hours}>24/7</span>
      </div>

      <div className={styles.description}>
        Nam eu mi eget velit vulputate tempor gravida quis massa. In malesuada
        condimentum ultrices. Sed et mauris a purus fermentum elementum. Sed
        tristique semper enim, et gravida orci iaculis et. Nulla facilisi.
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.phone}>
          <span>
            <Phone className={styles.icon} />
          </span>
          <span className={styles.phoneNumber}>800-5-800</span>
        </div>
        <div className={styles.adress}>
          <LocationOn className={styles.icon} />
          <span className={styles.addressLine}>
            43 2-ND AVENUE, NEW YORK, 29004-7153
          </span>
        </div>
      </div>

      <div className={styles.socialLinks}>
        <div className={styles.title}>Social:</div>
        <div className={styles.links}>
          <a id={styles.facebook} href="#">
            <Facebook className={styles.socialLink} />
          </a>
          <a id={styles.twitter} href="#">
            <Twitter className={styles.socialLink} />
          </a>
          <a id={styles.youtube} href="#">
            <YouTube className={styles.socialLink} />
          </a>
          <a id={styles.instagram} href="#">
            <Instagram className={styles.socialLink} />
          </a>
        </div>
      </div>
      <button className={styles.getTaxiBtn}>get taxi online</button>
    </div>
  );
}
