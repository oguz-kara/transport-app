import "../styles/globals.css";
import Head from "next/head";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Topbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
