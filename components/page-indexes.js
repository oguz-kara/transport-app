import styles from "../styles/page-indexes.module.scss";
import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "@material-ui/icons";

export default function PageIndexes({ data, config, updateMethod }) {
  const getTotalPageCount = (length) => {
    let numberOfPages = 0;
    numberOfPages = Math.ceil(length / config.maxCardPerPage);

    return numberOfPages;
  };

  const getInitialViewedIndexes = (renderCount) => {
    let initialViewedIndexes = [];
    renderCount =
      renderCount > getTotalPageCount(data.length)
        ? getTotalPageCount(data.length)
        : renderCount;
    for (let i = 1; i <= renderCount; i++) {
      initialViewedIndexes.push(i);
    }
    return initialViewedIndexes;
  };
  const [currentIndex, setCurrentIndex] = useState(1);
  const [viewedIndexes, setViewedIndexes] = useState(
    getInitialViewedIndexes(config.indexRenderCount)
  );
  const [isInitial, setInitial] = useState(true);

  const isLastIndexSelected = () => {
    return viewedIndexes[config.indexRenderCount - 1] === currentIndex;
  };
  const isFirstIndexSelected = () => {
    return viewedIndexes[0] === currentIndex;
  };
  const getIncreasedViewedIndexes = () => {
    const newIndexes = [];

    for (
      let i = currentIndex;
      i <= currentIndex + config.indexRenderCount - 1;
      i++
    ) {
      if (i >= getTotalPageCount(data.length)) {
        newIndexes.push(i);
        return newIndexes;
      }
      newIndexes.push(i);
    }
    return newIndexes;
  };
  const getDecreasedViewedIndexes = () => {
    const newIndexes = [];
    if (viewedIndexes[0] === 1) {
      return viewedIndexes;
    }
    for (
      let i = currentIndex;
      i >= currentIndex - config.indexRenderCount + 1;
      i--
    ) {
      if (i <= 1) {
        newIndexes.push(i);
        return newIndexes.reverse();
      }
      newIndexes.push(i);
    }
    return newIndexes.reverse();
  };

  const handleClick = (e) => {
    if (isInitial) {
      setInitial(false);
    }
    const index = parseInt(e.target.innerText);
    setCurrentIndex(index);
  };

  const handleNext = (e) => {
    if (isInitial) {
      setInitial(false);
    }
    if (!(currentIndex >= data.length)) {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  const handleBack = (e) => {
    if (isInitial) {
      setInitial(false);
    }
    if (!(currentIndex <= 1)) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (!isInitial) {
      if (isLastIndexSelected()) {
        setViewedIndexes(getIncreasedViewedIndexes());
      }
      if (isFirstIndexSelected()) {
        setViewedIndexes(getDecreasedViewedIndexes());
      }
      updateMethod(currentIndex, config.maxCardPerPage, data);
      window.scrollTo(0, 0);
    }
  }, [currentIndex]);

  return (
    <div className={styles.container}>
      <button
        className={`${styles.back} ${currentIndex === 1 && styles.disabled}`}
        onClick={(e) => handleBack(e)}
        disabled={currentIndex === 1}
      >
        <span className={styles.icon}>
          <ArrowLeft />
        </span>
        <span>prev</span>
      </button>
      <div className={styles.indexes}>
        {viewedIndexes.map((index) => (
          <button
            key={index}
            className={styles.index}
            onClick={(e) => handleClick(e)}
            disabled={currentIndex === index}
          >
            {index}
          </button>
        ))}
      </div>
      <button
        className={`${styles.next}  ${
          data.length === currentIndex && styles.disabled
        }`}
        onClick={(e) => handleNext(e)}
        disabled={data.length === currentIndex}
      >
        <span>next</span>
        <span className={styles.icon}>
          <ArrowRight />
        </span>
      </button>
    </div>
  );
}
