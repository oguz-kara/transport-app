import "../styles/globals.css";
import { useState } from "react";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
