import styles from "../styles/hero.module.scss";

export default function Hero({ pageName }) {
  return (
    <div className={styles.container}>
      <div className={styles.colorEffect}>
        <div>
          <span>home</span>
          <span style={{ color: "#ffc61a" }}>
            {" //"} {pageName}
          </span>
        </div>
        <h1>{pageName}</h1>
      </div>
      <div className="path"></div>
    </div>
  );
}
