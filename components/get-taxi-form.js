import styles from "../styles/get-taxi-form.module.scss";
import Image from "next/image";

// icons

import { LocationOn, Phone, DateRange } from "@material-ui/icons";

export default function GetTaxiForm() {
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <h4 className={styles.title}>
          OUR OPERATORS ARE WAITING FOR YOUR CALL:
        </h4>
        <h3 className={styles.phoneNumber}>800-5-800</h3>
      </div>
      <div className={styles.bottom}>
        <div className={styles.info}>Also you can order a taxi online</div>
        <form>
          <div className={styles.tripType}>
            <span className={styles.type1}>standart</span>
            <span className={styles.type2}>business</span>
            <span className={styles.type3}>vip</span>
            <span className={styles.type4}>bus-minivan</span>
          </div>
          <div className={styles.form}>
            <div className={styles.row}>
              <div className={styles.inputContainer}>
                <input type="text" name="fromAdress" id="fromAdress" />
                <LocationOn className={styles.formIcon} />
              </div>
              <div className={styles.inputContainer}>
                <input type="text" name="toAdress" id="toAdress" />
                <LocationOn className={styles.formIcon} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputContainer}>
                <input type="text" name="phoneNumber" id="phoneNumber" />
                <Phone className={styles.formIcon} />
              </div>
              <div className={styles.inputContainer}>
                <input type="text" name="dateTime" id="dateTime" />
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
