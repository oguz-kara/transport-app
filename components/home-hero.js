import Navbar from "./navbar";
import styles from "../styles/home-hero.module.scss";
import Image from "next/image";

export default function HomeHero() {
  return (
    <div className={styles.container}>
      <Navbar type="static" />
      <div className={styles.heroHeader}>
        <h4>get taxi now</h4>
        <div className={styles.phone}>800-5-800</div>
      </div>

      <div className={styles.largeImage}>
        <Image
          width={700}
          height={440}
          alt="taxi"
          src="/assets/images/_car-big.png"
        />
      </div>
    </div>
  );
}
