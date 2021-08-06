import styles from "../styles/testimonials-section.module.scss";
import { FormatQuote } from "@material-ui/icons";
import Image from "next/image";
import Text from "./text";

export default function TestimonialsSection() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text type="yellow">{"happy client's"}</Text>
        <Text type="h1" size="xLarge">
          testimonials
        </Text>
      </div>
      <div className={styles.testimonials}>
        <div className={styles.testimonial}>
          <div className={styles.comment}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            soluta praesentium reiciendis facilis quasi. Dolore in minima
            dolorem eius consequatur.
          </div>
          <div className={styles.quote}>
            <FormatQuote style={{ fontSize: 60, color: "#e6e6e6" }} />{" "}
            <div className={styles.author}>steven rashford</div>
            <div className={styles.avatar}>
              <Image
                width={46}
                height={46}
                src="/assets/images/_client-1.jpg"
                alt="avatar"
              />
            </div>
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.comment}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            soluta praesentium reiciendis facilis quasi. Dolore in minima
            dolorem eius consequatur.
          </div>
          <div className={styles.quote}>
            <FormatQuote style={{ fontSize: 60, color: "#e6e6e6" }} />{" "}
            <div className={styles.author}>steven rashford</div>
            <div className={styles.avatar}>
              <Image
                width={46}
                height={46}
                src="/assets/images/_client-1.jpg"
                alt="avatar"
              />
            </div>
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.comment}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            soluta praesentium reiciendis facilis quasi. Dolore in minima
            dolorem eius consequatur.
          </div>
          <div className={styles.quote}>
            <FormatQuote style={{ fontSize: 60, color: "#e6e6e6" }} />{" "}
            <div className={styles.author}>steven rashford</div>
            <div className={styles.avatar}>
              <Image
                width={46}
                height={46}
                src="/assets/images/_client-1.jpg"
                alt="avatar"
              />
            </div>
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.comment}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            soluta praesentium reiciendis facilis quasi. Dolore in minima
            dolorem eius consequatur.
          </div>
          <div className={styles.quote}>
            <FormatQuote style={{ fontSize: 60, color: "#e6e6e6" }} />{" "}
            <div className={styles.author}>steven rashford</div>
            <div className={styles.avatar}>
              <Image
                width={46}
                height={46}
                src="/assets/images/_client-1.jpg"
                alt="avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
