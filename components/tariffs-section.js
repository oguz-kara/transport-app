import styles from "../styles/tariff-section.module.scss";
import Image from "next/image";
import StarIcon from "@material-ui/icons/Star";

export default function TariffsSection() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h4>see our</h4>
        <h2>tariffs</h2>
      </header>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              width={146}
              height={92}
              src="/assets/images/_tariff-1.png"
              alt="tariff"
            />
          </div>
          <h2>standart</h2>
          <p className={styles.desc}>
            Standard sedan for a drive around the city at your service
          </p>
          <div className={styles.price}>
            $2.7
            <span className={styles.dollar}>/km</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              width={146}
              height={92}
              src="/assets/images/_tariff-2.png"
              alt="tariff"
            />
          </div>
          <h2>business</h2>
          <p className={styles.desc}>
            Standard sedan for a drive around the city at your service
          </p>
          <div className={styles.price}>
            $2.5
            <span className={styles.dollar}>/km</span>
          </div>
        </div>
        <div id={styles.vip} className={styles.card}>
          <div className={styles.image}>
            <Image
              width={146}
              height={92}
              src="/assets/images/_tariff-3.png"
              alt="tariff"
            />
          </div>
          <h2>vip</h2>
          <p className={styles.desc}>
            Standard sedan for a drive around the city at your service
          </p>
          <div className={styles.price}>
            $10
            <span className={styles.dollar}>/km</span>
          </div>
          <div className={styles.vipTag}></div>
          <StarIcon id={styles.starIcon} />
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              width={146}
              height={92}
              src="/assets/images/_tariff-4.png"
              alt="tariff"
            />
          </div>
          <h2>bus-minivan</h2>
          <p className={styles.desc}>
            Standard sedan for a drive around the city at your service
          </p>
          <div className={styles.price}>
            $2
            <span className={styles.dollar}>/km</span>
          </div>
        </div>
      </div>
    </div>
  );
}
