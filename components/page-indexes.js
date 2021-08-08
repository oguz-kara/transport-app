import styles from "../styles/page-indexes.module.scss";
import { useState, useEffect } from "react";

export default function PageIndexes({ posts, data, updateCurrentCards }) {
  const getTotalPageCount = (length) => {
    let numberOfPages = 0;
    numberOfPages = Math.ceil(length / data.maxCardPerPage);

    return numberOfPages;
  };

  const getInitialViewedIndexes = (renderCount) => {
    let initialViewedIndexes = [];
    renderCount =
      renderCount > getTotalPageCount(posts.length)
        ? getTotalPageCount(posts.length)
        : renderCount;
    for (let i = 1; i <= renderCount; i++) {
      initialViewedIndexes.push(i);
    }
    return initialViewedIndexes;
  };
  const [currentIndex, setCurrentIndex] = useState(1);
  const [viewedIndexes, setViewedIndexes] = useState(
    getInitialViewedIndexes(data.indexRenderCount)
  );
  const [isInitial, setInitial] = useState(true);

  const isLastIndexSelected = () => {
    return viewedIndexes[data.indexRenderCount - 1] === currentIndex;
  };
  const isFirstIndexSelected = () => {
    return viewedIndexes[0] === currentIndex;
  };
  const getIncreasedViewedIndexes = () => {
    const newIndexes = [];

    for (
      let i = currentIndex;
      i <= currentIndex + data.indexRenderCount - 1;
      i++
    ) {
      if (i >= getTotalPageCount(posts.length)) {
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
      i >= currentIndex - data.indexRenderCount + 1;
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
    if (!(currentIndex >= posts.length)) {
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
      updateCurrentCards(currentIndex, data.maxCardPerPage, posts);
      window.scrollTo(0, 0);
    }
  }, [currentIndex]);

  return (
    <div className={styles.container}>
      <button className={styles.back} onClick={(e) => handleBack(e)}>
        prev
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
      <button className={styles.next} onClick={(e) => handleNext(e)}>
        next
      </button>
    </div>
  );
}
