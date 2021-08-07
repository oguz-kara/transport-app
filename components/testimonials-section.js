import styles from "../styles/testimonials-section.module.scss";
import { FormatQuote, ArrowBack, ArrowForward } from "@material-ui/icons";
import { useRef, useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import Image from "next/image";
import Text from "./text";

const data = [
  {
    id: 1,
    author: "Sara Jay",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta praesentium reiciendis facilis quasi. Dolore in minima dolorem eius consequatur.",
    src: "/assets/images/_client-1.jpg",
  },
  {
    id: 2,
    author: "Sara Jay",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta praesentium reiciendis facilis quasi. Dolore in minima dolorem eius consequatur.",
    src: "/assets/images/_client-1.jpg",
  },
  {
    id: 3,
    author: "Sara Jay",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta praesentium reiciendis facilis quasi. Dolore in minima dolorem eius consequatur.",
    src: "/assets/images/_client-1.jpg",
  },
  {
    id: 4,
    author: "Sara Jay",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta praesentium reiciendis facilis quasi. Dolore in minima dolorem eius consequatur.",
    src: "/assets/images/_client-1.jpg",
  },
  {
    id: 5,
    author: "Sara Jay",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta praesentium reiciendis facilis quasi. Dolore in minima dolorem eius consequatur.",
    src: "/assets/images/_client-1.jpg",
  },
  {
    id: 6,
    author: "Sara Jay",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta praesentium reiciendis facilis quasi. Dolore in minima dolorem eius consequatur.",
    src: "/assets/images/_client-1.jpg",
  },
  {
    id: 7,
    author: "Sara Jay",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta praesentium reiciendis facilis quasi. Dolore in minima dolorem eius consequatur.",
    src: "/assets/images/_client-1.jpg",
  },
  {
    id: 8,
    author: "Sara Jay",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta praesentium reiciendis facilis quasi. Dolore in minima dolorem eius consequatur.",
    src: "/assets/images/_client-1.jpg",
  },
  {
    id: 9,
    author: "Sara Jay",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta praesentium reiciendis facilis quasi. Dolore in minima dolorem eius consequatur.",
    src: "/assets/images/_client-1.jpg",
  },
  {
    id: 10,
    author: "Sara Jay",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta praesentium reiciendis facilis quasi. Dolore in minima dolorem eius consequatur.",
    src: "/assets/images/_client-1.jpg",
  },
  {
    id: 11,
    author: "Sara Jay",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta praesentium reiciendis facilis quasi. Dolore in minima dolorem eius consequatur.",
    src: "/assets/images/_client-1.jpg",
  },
];

export default function TestimonialsSection() {
  const testimonialsConEl = useRef(null);
  const testimonialEl = useRef(null);
  const windowSize = useWindowSize();
  const [state, setState] = useState(false);

  useEffect(() => {
    console.log("window size ", windowSize);
    if (windowSize.width <= 748 && windowSize.width > 500) {
      testimonialsConEl.current.style.gridTemplateColumns = `repeat(${data.length}, 50%)`;
    } else if (windowSize.width <= 500) {
      testimonialsConEl.current.style.gridTemplateColumns = `repeat(${data.length}, 100%)`;
    } else {
      testimonialsConEl.current.style.gridTemplateColumns = `repeat(${data.length}, 33.33%)`;
    }
  }, [windowSize]);

  const handleClick = (direction) => {
    setState(true);
    const width = testimonialEl.current.getBoundingClientRect().width;
    // TODO get current margin value.
    const scrollValue = width + 40;
    const scrollPos = testimonialsConEl.current.scrollLeft;

    if (direction === "left") {
      testimonialsConEl.current.scrollLeft = scrollPos - scrollValue;
    } else {
      testimonialsConEl.current.scrollLeft = scrollPos + scrollValue;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text type="yellow">{"happy client's"}</Text>
        <Text type="h1" size="xLarge">
          testimonials
        </Text>
      </div>
      <div className={styles.testimonials} ref={testimonialsConEl}>
        {data.map((item, index) => (
          <div key={index} className={styles.testimonial} ref={testimonialEl}>
            <div className={styles.comment}>{item.comment}</div>
            <div className={styles.quote}>
              <FormatQuote style={{ fontSize: 60, color: "#e6e6e6" }} />{" "}
              <div className={styles.author}>{item.author}</div>
              <div className={styles.avatar}>
                <Image width={46} height={46} src={item.src} alt="avatar" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.actions}>
        <button className={styles.back} onClick={(e) => handleClick("left")}>
          <ArrowBack />
        </button>
        <button
          className={styles.forward}
          onClick={(e) => handleClick("right")}
        >
          <ArrowForward />
        </button>
      </div>
    </div>
  );
}
