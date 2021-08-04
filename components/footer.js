import styles from "../styles/footer.module.scss";
import Image from "next/image";
import SocialLinks from "./social-links";
import { ChevronRight, Phone, Mail } from "@material-ui/icons";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.column1}>
          <h4>about us</h4>
          <p>
            Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat.
            Maecenas suscipit tellus sit amet augue placerat fringilla a id
            lacus. Fusce tincidunt in leo lacinia condimentum.
          </p>
          <SocialLinks color="#ffc61a" fontSize="22px" />
        </div>
        <div className={styles.column2}>
          <h4>explore</h4>
          <div>
            <div className={styles.row}>
              <div>
                <ChevronRight className={styles.chevronIcon} />
                get taxi
              </div>
              <div>
                <ChevronRight className={styles.chevronIcon} />
                become a driver
              </div>
            </div>
            <div className={styles.row}>
              <div>
                <ChevronRight className={styles.chevronIcon} />
                get taxi
              </div>
              <div>
                <ChevronRight className={styles.chevronIcon} />
                become a driver
              </div>
            </div>
            <div className={styles.row}>
              <div>
                <ChevronRight className={styles.chevronIcon} />
                get taxi
              </div>
              <div>
                <ChevronRight className={styles.chevronIcon} />
                become a driver
              </div>
            </div>
            <div className={styles.row}>
              <div>
                <ChevronRight className={styles.chevronIcon} />
                get taxi
              </div>
              <div>
                <ChevronRight className={styles.chevronIcon} />
                become a driver
              </div>
            </div>
          </div>
        </div>
        <div className={styles.column3}>
          <h4>contact us</h4>
          <p>
            <span className={styles.colorYellow}>Adress:</span>
            43 2-nd Avenue, New York, NY 29004-7153
          </p>
          <div>
            <Phone className={styles.icon} />
            800-5-800
          </div>
          <div>
            <Mail className={styles.icon} />
            gettaxi@taxipark.co.uk
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <p>
            2017 © All Rights Reserved{" "}
            <span className={styles.colorYellow}>Terms of use</span>
          </p>
          <div className={styles.image}>
            <Image
              height={72}
              width={59}
              src="/assets/images/_footer-car.png"
              alt="car"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
