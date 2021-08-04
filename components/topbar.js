import styles from "../styles/topbar.module.scss";
import Link from "next/link";
import { Phone } from "@material-ui/icons";
import SocialLinks from "./social-links";

export default function Topbar() {
  return (
    <div className={styles.container}>
      <div className={styles.wideScreen}>
        <div className={styles.leftSide}>
          <div className={styles.phoneNumber}>
            <Phone fontSize="small" />
            <span>800-5-800</span>
          </div>
          <div className={styles.getTaxiPark}>
            <Phone fontSize="small" />
            <span>GETTAXIPARK</span>
          </div>
          <div className={styles.adress}>
            <Phone fontSize="small" />
            <span>43 2-ND AVENUE, NEW YORK, 29004-7153</span>
          </div>
          <SocialLinks fontSize="18px" />
        </div>
        <div className={styles.rightSide}>
          <Link href="/taxi" passHref>
            <a className={styles.getTaxiLink}>get taxi online</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
