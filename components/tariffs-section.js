import { useEffect } from "react";
import styles from "../styles/tariffs-section.module.scss";
import Image from "next/image";
import StarIcon from "@material-ui/icons/Star";
import Text from "./text";
import useWindowSize from "../hooks/useWindowSize";

export default function TariffsSection({
  yellowTitle,
  title,
  backgroundUrl,
  titleColor,
}) {
  const getBackground = (url) => {
    if (url) {
      return {
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
      };
    }
    return {};
  };

  return (
    <div className={styles.container} style={getBackground(backgroundUrl)}>
      <header className={styles.header}>
        <Text type="yellow">{yellowTitle}</Text>
        <Text type="h1" size="xLarge" style={{ color: titleColor }}>
          {title}
        </Text>
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
