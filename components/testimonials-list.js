import { useState } from "react";
import styles from "../styles/testimonials-list.module.scss";
import PageIndexes from "./page-indexes";
import { FormatQuote } from "@material-ui/icons";
import Image from "next/image";

function Testimonial({ item }) {
  return (
    <div className={styles.testimonial}>
      <div className={styles.comment}>{item.comment}</div>
      <div className={styles.quote}>
        <FormatQuote style={{ fontSize: 60, color: "#e6e6e6" }} />{" "}
        <div className={styles.author}>{item.author}</div>
        <div className={styles.avatar}>
          <Image width={46} height={46} src={item.src} alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsList({ data }) {
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

  return (
    <div className={styles.container}>
      <div className={styles.testimonialList}>
        {data.map((item, index) => (
          <Testimonial key={index} item={item} />
        ))}
      </div>
      <PageIndexes
        data={currentCards}
        config={config}
        updateMethod={updateCurrentCards}
      />
    </div>
  );
}
