import "../styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import Hero from "../components/hero";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
