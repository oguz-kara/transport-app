import { useState } from "react";
import styles from "../styles/navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Close } from "@material-ui/icons";

export function MbNavbar({ active, onClick }) {
  return (
    <div className={`${styles.mbNav} ${active && styles.active}`}>
      <div className={styles.exitContainer}>
        <button onClick={(e) => onClick(e)}>
          <Close style={{ fontSize: 50, margin: 5 }} />
        </button>
      </div>
      <ul>
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
    </div>
  );
}

export default function Navbar({ onClick }) {
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
        </div>
        <div id={styles.hamburger} onClick={(e) => onClick(e)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
}
