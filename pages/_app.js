import "../styles/globals.css";
import { useState } from "react";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/*
      <Topbar />
      <Navbar onClick={showNavbar} />
      <Hero />
      <MbNavbar active={show} onClick={hideNavbar} />
      */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
