import styles from "../styles/get-taxi-form.module.scss";
import Image from "next/image";

// icons

import { LocationOn, Phone, DateRange } from "@material-ui/icons";
import TripTypes from "./trip-types";

export default function GetTaxiForm({ noHeader, fullWidth }) {
  const classFw = fullWidth ? styles.fullWidth : "";
  return (
    <section className={`${styles.container} ${classFw}`}>
      {!noHeader && (
        <div className={styles.top}>
          <h4 className={styles.title}>
            OUR OPERATORS ARE WAITING FOR YOUR CALL:
          </h4>
          <h3 className={styles.phoneNumber}>800-5-800</h3>
        </div>
      )}
      <div className={styles.bottom}>
        {!noHeader && (
          <div className={styles.info}>Also you can order a taxi online</div>
        )}
        <form
          className={classFw}
          style={{ padding: fullWidth && "200px 100px 100px 100px" }}
        >
          <TripTypes />
          <div className={styles.form}>
            <div className={styles.row}>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  name="fromAdress"
                  id="fromAdress"
                  placeholder="From Adress..."
                />
                <LocationOn className={styles.formIcon} />
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  name="toAdress"
                  id="toAdress"
                  placeholder="To Adress..."
                />
                <LocationOn className={styles.formIcon} />
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone Number"
                />
                <Phone className={styles.formIcon} />
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  name="dateTime"
                  id="dateTime"
                  placeholder="Date and Time"
                />
                <DateRange className={styles.formIcon} />
              </div>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.submit}>
              get taxi
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
