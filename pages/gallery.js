import { useState } from "react";
import Topbar from "../components/topbar";
import fakeData from "../fake_data.json";
import GalleryCards from "../components/gallery-cards";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import styles from "../styles/gallery.module.scss";

export default function Gallery() {
  const [isActive, setActive] = useState(false);

  return (
    <div className={styles.container}>
      <Topbar />
      <Navbar type="main" data={fakeData.navLinks} />
      <Hero pageName="gallery" />
      <div className={styles.main}>
        <GalleryCards data={fakeData.galleryData} />
      </div>
    </div>
  );
}
