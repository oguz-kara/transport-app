import ListLink from "./list-link";
import styles from "../styles/navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Close } from "@material-ui/icons";

export function MbNavbar({ active, onClick }) {
  return (
    <div className={`${styles.mbNav} ${active && styles.active}`}>
      <div className={styles.exitContainer}>
        <button onClick={(e) => onClick(e)}>
          <Close style={{ fontSize: 50, margin: "15px 30px 15px 0" }} />
        </button>
      </div>
      <ul>
        <ListLink
          collapseable
          items={[
            { href: "/", name: "some link" },
            { href: "/", name: "some link" },
            { href: "/", name: "some link" },
          ]}
        >
          home
        </ListLink>
        <ListLink href="/get-taxi">get taxi</ListLink>
        <ListLink>services</ListLink>
        <ListLink
          collapseable
          items={[
            { href: "/", name: "some link" },
            { href: "/", name: "some link" },
            { href: "/", name: "some link" },
          ]}
        >
          our blog
        </ListLink>
        <ListLink
          collapseable
          items={[
            { href: "/", name: "some link" },
            { href: "/", name: "some link" },
            { href: "/", name: "some link" },
          ]}
        >
          gallery
        </ListLink>
        <ListLink>testimonials</ListLink>
        <ListLink>contact</ListLink>
        <ListLink
          collapseable
          items={[
            { href: "/", name: "some link" },
            { href: "/", name: "some link" },
            { href: "/", name: "some link" },
          ]}
        >
          pages
        </ListLink>
      </ul>
    </div>
  );
}

export default function Navbar({ onClick, type }) {
  const getClass = (type) => {
    return type === "static" ? styles.navbarStatic : styles.navbarMain;
  };
  return (
    <div className={getClass(type)}>
      <nav className={styles.nav}>
        <div className={styles.navbarBrand}>
          <Image
            src="/assets/images/logo-inner.png"
            alt="taxi"
            width={163}
            height={42}
          />
        </div>
        <ul className={styles.navbarLinks}>
          <li className={styles.listItem}>
            <Link href="/" passHref>
              <a className={styles.navbarLink}>
                <span>home</span>
                <span>
                  <ChevronRight className={styles.chevronRightIcon} />
                </span>
              </a>
            </Link>
            <ul className={styles.collapseMenu}>
              <li>
                <Link href="/" passHref>
                  Some link
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  Some link 2
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  Some link
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.listItem}>
            <Link href="/get-taxi" passHref>
              get taxi
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/" passHref>
              services
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/" passHref>
              <a className={styles.navbarLink}>
                <span>our blog</span>
                <span>
                  <ChevronRight className={styles.chevronRightIcon} />
                </span>
              </a>
            </Link>
            <ul className={styles.collapseMenu}>
              <li>
                <Link href="/" passHref>
                  Some link
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  Some link 2
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  Some link
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.listItem}>
            <Link href="/" passHref>
              <a className={styles.navbarLink}>
                <span>gallery</span>
                <span>
                  <ChevronRight className={styles.chevronRightIcon} />
                </span>
              </a>
            </Link>
            <ul className={styles.collapseMenu}>
              <li>
                <Link href="/" passHref>
                  Some link
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  Some link 2
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  Some link
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.listItem}>
            <Link href="/" passHref>
              testimonials
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/" passHref>
              contact
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/" passHref>
              <a className={styles.navbarLink}>
                <span>pages</span>
                <span>
                  <ChevronRight className={styles.chevronRightIcon} />
                </span>
              </a>
            </Link>
            <ul className={styles.collapseMenu}>
              <li>
                <Link href="/" passHref>
                  Some link
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  Some link 2
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  Some link
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div id={styles.hamburger} onClick={(e) => onClick(e)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
}
