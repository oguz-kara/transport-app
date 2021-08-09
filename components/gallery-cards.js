import { useState } from "react";
import PageIndexes from "../components/page-indexes";
import styles from "../styles/gallery-cards.module.scss";
import { AccessTime, Favorite, Sms } from "@material-ui/icons";
import Link from "next/link";
import Image from "next/image";

function GalleryCard({ data }) {
  return (
    <li className={styles.galleryCard}>
      <Link href={data.href ? data.href : "/"} passHref>
        <a className={styles.image}>
          <Image
            width={360}
            height={240}
            src={data.href}
            alt="post"
            layout="responsive"
          />
        </a>
      </Link>
      <Link href="/" passHref>
        <a>
          <h3 className={styles.title}>{data.title}</h3>
        </a>
      </Link>
      <div className={styles.info}>
        <div className={styles.date}>
          <AccessTime className={styles.icon} />
          {data.date}
        </div>
        <div className={styles.likes}>
          <span>
            <Favorite className={styles.icon} />
          </span>
          <span>{data.likes}</span>
        </div>
        <div className={styles.comments}>
          <span>
            <Sms className={styles.icon} />
          </span>
          <span>{data.comments}</span>
        </div>
      </div>
    </li>
  );
}

export default function GalleryCards({ data }) {
  const config = {
    maxCardPerPage: 9,
    indexRenderCount: 4,
  };
  const getInitialCards = (data) => {
    return data.slice(0, config.maxCardPerPage);
  };
  const [currentCards, setCurrentCards] = useState(getInitialCards(data));

  const updateCurrentCards = (currentIndex, maxCardPerPage, data) => {
    const cardsEnd = currentIndex * maxCardPerPage;
    setCurrentCards(data.slice(cardsEnd - maxCardPerPage, cardsEnd));
  };
  return (
    <div className={styles.container}>
      <div className={styles.galleryCards}>
        {currentCards.map((card, index) => (
          <GalleryCard key={index} data={card} />
        ))}
      </div>
      <PageIndexes
        data={data}
        config={config}
        updateMethod={updateCurrentCards}
      />
    </div>
  );
}
