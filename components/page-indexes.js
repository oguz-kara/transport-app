import styles from "../styles/page-indexes.module.scss";
import { useState, useEffect } from "react";

export default function PageIndexes() {
  /*
        most messy component in the world!!!
    */

  const data = {
    maxCardPerPage: 12,
    indexRenderCount: 4,
  };
  const getTotalPageCount = (length) => {
    let numberOfPages = 0;
    let result = [];
    numberOfPages = Math.ceil(length / data.maxCardPerPage);
    console.log("number of pages", numberOfPages);
    /*
    for (let i = 1; i <= numberOfPages; i++) {
      result.push(i);
    }
    */

    return numberOfPages;
  };
  const getInitialViewedIndexes = (renderCount) => {
    let initialViewedIndexes = [];
    renderCount =
      renderCount > getTotalPageCount(49)
        ? getTotalPageCount(49).length
        : renderCount;
    console.log("render count", renderCount);
    for (let i = 1; i <= renderCount; i++) {
      initialViewedIndexes.push(i);
    }
    console.log("initial viewed indexes ", initialViewedIndexes);
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
      if (i >= getTotalPageCount(49)) {
        newIndexes.push(i);
        console.log("increased interrupt rendered indexes ", newIndexes);
        return newIndexes;
      }
      newIndexes.push(i);
    }
    console.log("increased rendered indexes ", newIndexes);
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
        console.log("decreased interrupt rendered indexes ", newIndexes);
        return newIndexes.reverse();
      }
      newIndexes.push(i);
    }
    console.log("decreased rendered indexes ", newIndexes);
    return newIndexes.reverse();
  };

  const handleClick = (e) => {
    if (isInitial) {
      setInitial(false);
    }
    const index = parseInt(e.target.innerText);
    console.log("dataset data ", index);
    setCurrentIndex(index);
    console.log("current index", currentIndex);
  };

  const handleNext = (e) => {
    if (isInitial) {
      setInitial(false);
    }
    if (!(currentIndex >= 49)) {
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
      } else if (isFirstIndexSelected()) {
        setViewedIndexes(getDecreasedViewedIndexes());
      } else {
        console.error("check page-indexes component something is wrong");
      }
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
