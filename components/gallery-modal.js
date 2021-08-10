import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/gallery-modal.module.scss";
import { Close, ArrowRight, ArrowLeft } from "@material-ui/icons";

export default function GalleryModal({ initialData, data, state, setState }) {
  const getIndexById = (id, data) => {
    return data.findIndex((data) => data.id === id);
  };
  const [index, setIndex] = useState(getIndexById(initialData.id, data));

  const increaseIndex = () => {
    if (data.length - 1 > index) {
      setIndex((prev) => prev + 1);
    }
  };

  const decreaseIndex = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setIndex(getIndexById(initialData.id, data));
  }, [state]);

  return (
    <div className={`${styles.container} ${state && styles.active}`}>
      <button className={styles.close} onClick={() => setState(false)}>
        <Close style={{ fontSize: 42 }} />
      </button>
      <div className={styles.imageContainer}>
        <Image
          src={
            data[index].href
              ? data[index].href
              : "/assets/images/_gallery-2.jpg"
          }
          alt="photo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.actions}>
        <button className={styles.left} onClick={() => decreaseIndex()}>
          <ArrowLeft className={styles.icon} />
        </button>
        <button className={styles.right}>
          <ArrowRight className={styles.icon} onClick={() => increaseIndex()} />
        </button>
      </div>
    </div>
  );
}
