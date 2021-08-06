import styles from "../styles/Home.module.scss";
import GetTaxiForm from "../components/get-taxi-form";
import HomeHero from "../components/home-hero.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeHero />
      <GetTaxiForm noHeader fullWidth />
    </div>
  );
}
