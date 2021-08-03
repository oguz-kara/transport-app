import styles from "../styles/topbar.module.scss";
import Link from "next/link";
import {
  Phone,
  Twitter,
  Facebook,
  Instagram,
  Pinterest,
} from "@material-ui/icons";

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
          <div className={styles.socialLinks}>
            <Link className={styles.socialLink} href="www.twitter.com" passHref>
              <Twitter style={{ fontSize: "18px" }} />
            </Link>
            <Link
              className={styles.socialLink}
              href="www.facebook.com"
              passHref
            >
              <Facebook style={{ fontSize: "18px" }} />
            </Link>
            <Link
              className={styles.socialLink}
              href="www.facebook.com"
              passHref
            >
              <Instagram style={{ fontSize: "18px" }} />
            </Link>
            <Link
              className={styles.socialLink}
              href="www.facebook.com"
              passHref
            >
              <Pinterest style={{ fontSize: "18px" }} />
            </Link>
          </div>
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
