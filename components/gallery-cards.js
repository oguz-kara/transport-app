import { useState, useEffect } from "react";
import GalleryModal from "../components/gallery-modal";
import PageIndexes from "../components/page-indexes";
import styles from "../styles/gallery-cards.module.scss";
import { AccessTime, Favorite, Sms } from "@material-ui/icons";
import Image from "next/image";

function GalleryCard({ data, onClick }) {
  return (
    <li className={styles.galleryCard}>
      <div className={styles.image} onClick={() => onClick(data)}>
        <Image
          width={360}
          height={240}
          src={data.href}
          alt="post"
          layout="responsive"
        />
      </div>
      <h3 className={styles.title} onClick={() => onClick(data)}>
        {data.title}
      </h3>
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

  const updateCurrentCards = (currentIndex, maxCardPerPage, data) => {
    const cardsEnd = currentIndex * maxCardPerPage;
    setCurrentCards(data.slice(cardsEnd - maxCardPerPage, cardsEnd));
  };

  const [currentCards, setCurrentCards] = useState(getInitialCards(data));
  const [active, setActive] = useState(false);
  const [initialData, setInitialData] = useState(getInitialCards(data)[0]);

  const handleClick = (data) => {
    setInitialData(data);
    setActive(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.galleryCards}>
        {currentCards.map((card, index) => (
          <GalleryCard key={index} data={card} onClick={handleClick} />
        ))}
      </div>
      <PageIndexes
        data={data}
        config={config}
        updateMethod={updateCurrentCards}
      />
      <GalleryModal
        initialData={initialData}
        data={currentCards}
        state={active}
        setState={setActive}
      />
    </div>
  );
}
