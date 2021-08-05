import "../styles/globals.css";
import { useState } from "react";
import Topbar from "../components/topbar";
import Navbar, { MbNavbar } from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  const [show, setShow] = useState(false);

  const showNavbar = (e) => {
    setShow(true);
  };
  const hideNavbar = (e) => {
    setShow(false);
  };

  return (
    <>
      <Topbar />
      <Navbar onClick={showNavbar} />
      <MbNavbar active={show} onClick={hideNavbar} />
      <Hero />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
