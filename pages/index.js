import Head from "next/head";
import Topbar from "../components/topbar";
import GetTaxiForm from "../components/get-taxi-form";
import styles from "../styles/Home.module.css";
import TariffsSection from "../components/tariffs-section";
import GetMobileSection from "../components/get-mobile-section";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GetTaxiForm />
      <TariffsSection />
      <GetMobileSection />
    </div>
  );
}