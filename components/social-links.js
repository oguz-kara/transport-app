import Link from "next/link";
import styles from "../styles/social-links.module.scss";
import { Twitter, Facebook, Instagram, Pinterest } from "@material-ui/icons";
export default function SocialLinks({ color, fontSize, show }) {
  const getStyle = (show = false) => {
    if (show) {
      return styles.socialLinks2;
    } else {
      return styles.socialLinks;
    }
  };
  return (
    <div
      className={getStyle(show)}
      style={{ color: color, fontSize: fontSize }}
    >
      <Link className={styles.socialLink} href="/" passHref>
        <Twitter style={{ fontSize: fontSize }} />
      </Link>
      <Link className={styles.socialLink} href="/" passHref>
        <Facebook style={{ fontSize: fontSize }} />
      </Link>
      <Link className={styles.socialLink} href="/" passHref>
        <Instagram style={{ fontSize: fontSize }} />
      </Link>
      <Link className={styles.socialLink} href="/" passHref>
        <Pinterest style={{ fontSize: fontSize }} />
      </Link>
    </div>
  );
}
