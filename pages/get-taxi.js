import { useState } from "react";
import Head from "next/head";
import GetTaxiForm from "../components/get-taxi-form";
import styles from "../styles/Home.module.scss";
import TariffsSection from "../components/tariffs-section";
import GetMobileSection from "../components/get-mobile-section";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import fakeData from "../fake_data.json";

export default function GetTaxi() {
  const [show, setShow] = useState(false);

  const showNavbar = (e) => {
    setShow(true);
  };
  const hideNavbar = (e) => {
    setShow(false);
  };
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Get Taxi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />
      <Navbar type="main" data={fakeData.navLinks} />
      <Hero pageName="get taxi" />
      <GetTaxiForm />
      <TariffsSection yellowTitle="see our" title="tariffs" />
      <GetMobileSection />
    </div>
  );
}
