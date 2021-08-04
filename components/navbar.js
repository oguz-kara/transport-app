import styles from "../styles/navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "@material-ui/icons";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navbarBrand}>
          <Image
            src="/assets/images/logo-inner.png"
            alt="taxi"
            width={163}
            height={42}
          />
        </div>
        <div className={styles.navbarLinks}>
          <ul>
            <li className={styles.listItem}>
              <Link href="/" passHref>
                <a>
                  home
                  <ChevronRight className={styles.chevronRightIcon} />
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
                </a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/" passHref>
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
                <a>
                  our blog
                  <ChevronRight className={styles.chevronRightIcon} />
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
                </a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/" passHref>
                <a>
                  gallery
                  <ChevronRight className={styles.chevronRightIcon} />
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
                </a>
              </Link>
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
                <a>
                  pages
                  <ChevronRight className={styles.chevronRightIcon} />
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
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div id={styles.hamburger}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
}
