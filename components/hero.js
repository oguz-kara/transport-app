import styles from "../styles/hero.module.scss";

export default function Hero({ paths }) {
  return (
    <div className={styles.container}>
      <div className={styles.colorEffect}>
        <div>
          <span>Home</span>
          <span style={{ color: "#ffc61a" }}>{" //"} Get Taxi</span>
        </div>
        <h1>Get Taxi</h1>
      </div>
      <div className="path"></div>
    </div>
  );
}
