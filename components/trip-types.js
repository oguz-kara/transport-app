import { useState } from "react";
import styles from "../styles/trip-types.module.scss";

function TripType({ children, onClick, trip }) {
  const isSelected = trip === children;
  return (
    <span
      onClick={(e) => onClick(e)}
      className={`${styles.type1} ${styles.tripType} ${
        isSelected && styles.active
      }`}
    >
      {children}
    </span>
  );
}

export default function TripTypes() {
  const [trip, setTrip] = useState("");

  const handleClick = (e) => {
    const text = e.target.innerText.toLowerCase();
    setTrip(text);
  };

  return (
    <div className={styles.tripTypes}>
      <TripType trip={trip} onClick={handleClick}>
        standart
      </TripType>
      <TripType trip={trip} onClick={handleClick}>
        business
      </TripType>
      <TripType trip={trip} onClick={handleClick}>
        vip
      </TripType>
      <TripType trip={trip} onClick={handleClick}>
        bus-minivan
      </TripType>
    </div>
  );
}
