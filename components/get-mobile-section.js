import styles from "../styles/get-mobile-section.module.scss";
import Link from "next/link";
import Text from "./text";

export default function GetMobileSection() {
  return (
    <section className={styles.container}>
      <div className={styles.parallax}>
        <div className={styles.header}>
          <Text type="yellow">get more benefits</Text>
          <Text type="h1" size="xLarge" style={{ color: "#fff" }}>
            DOWNLOAD THE APP
          </Text>
        </div>
        <div className={styles.main}>
          <div id={styles.column1} className={styles.column}>
            <div className={styles.info}>
              <div className={styles.number}>
                <div>01.</div>
              </div>
              <div className={styles.text}>
                <h5 className={styles.title}>FAST BOOKING</h5>
                <p>
                  Nam ac ligula congue, interdum enim sit amet, fermentum nisi.
                </p>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.number}>
                <div>02.</div>
              </div>
              <div className={styles.text}>
                <h5 className={styles.title}>FAST BOOKING</h5>
                <p>
                  Nam ac ligula congue, interdum enim sit amet, fermentum nisi.
                </p>
              </div>
            </div>
          </div>
          <div id={styles.column2} className={styles.column}>
            <div className={`${styles.info} ${styles.rowReverse}`}>
              <div className={styles.number}>
                <div>03.</div>
              </div>
              <div className={styles.text}>
                <h5 className={styles.title}>FAST BOOKING</h5>
                <p>
                  Nam ac ligula congue, interdum enim sit amet, fermentum nisi.
                </p>
              </div>
            </div>
            <div className={`${styles.info} ${styles.rowReverse}`}>
              <div className={styles.number}>
                <div>04.</div>
              </div>
              <div className={styles.text}>
                <h5 className={styles.title}>FAST BOOKING</h5>
                <p>
                  Nam ac ligula congue, interdum enim sit amet, fermentum nisi.
                </p>
              </div>
            </div>
          </div>

          <div id={styles.column3} className={styles.column}>
            <div className={styles.mobileLinks}>
              <Link src="/" href="/" passHref>
                <a id={styles.googlePlay} className={styles.mobileLink}></a>
              </Link>
              <Link src="/" href="/" passHref>
                <a id={styles.appleStore} className={styles.mobileLink}></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
