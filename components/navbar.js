import { useState } from "react";
import ListLink from "./list-link";
import styles from "../styles/navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Close } from "@material-ui/icons";
import fakeData from "../fake_data.json";

function MobileNavbar({ active, onClick }) {
  return (
    <div className={`${styles.mbNav} ${active && styles.active}`}>
      <div className={styles.exitContainer}>
        <button onClick={(e) => onClick(e)}>
          <Close style={{ fontSize: 50, margin: "15px 30px 15px 0" }} />
        </button>
      </div>
      <ul>
        {fakeData.navLinks.map((data, index) => (
          <ListLink key={index} data={data}>
            {data.name}
          </ListLink>
        ))}
      </ul>
    </div>
  );
}
function StaticNavbar({ onClick, data }) {
  return (
    <div className={styles.navbarStatic}>
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
          {data.map((linkObj, index) =>
            linkObj.innerLinks.length > 0 ? (
              <li key={index} className={styles.listItem}>
                <div className={styles.listHeader}>
                  <span>{linkObj.name}</span>
                  <span>
                    <ChevronRight className={styles.chevronRightIcon} />
                  </span>
                </div>
                <ul className={styles.collapseMenu}>
                  {linkObj.innerLinks.map((innerLink, index) => (
                    <li key={index}>
                      <Link href={innerLink.href} passHref>
                        {innerLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li className={styles.listItem}>
                <Link href={linkObj.href} passHref>
                  {linkObj.name}
                </Link>
              </li>
            )
          )}
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
function MainNavbar({ onClick, data }) {
  return (
    <div className={styles.navbarMain}>
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
          {data.map((dataObj, index) =>
            dataObj.innerLinks.length > 0 ? (
              <li key={index} className={styles.listItem}>
                <div className={styles.listHeader}>
                  <span>{dataObj.name}</span>
                  <span>
                    <ChevronRight className={styles.chevronRightIcon} />
                  </span>
                </div>
                <ul className={styles.collapseMenu}>
                  {dataObj.innerLinks.map((innerLink, index) => (
                    <li key={index}>
                      <Link href={innerLink.href} passHref>
                        {innerLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={index} className={styles.listItem}>
                <Link href={dataObj.href} passHref>
                  {dataObj.name}
                </Link>
              </li>
            )
          )}
        </ul>
        <div id={styles.hamburger} onClick={() => onClick()}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
}

function GetNavbar({ onClick, type, active, data }) {
  switch (type) {
    case "main":
      return <MainNavbar onClick={onClick} data={data} />;
    case "static":
      return <StaticNavbar onClick={onClick} data={data} />;
    case "mobile":
      return <MobileNavbar onClick={onClick} active={active} data={data} />;
    default:
      return <MainNavbar onClick={onClick} data={data} />;
  }
}

function WholeNavbar({ type, data }) {
  const [show, setShow] = useState(false);

  const showNavbar = () => {
    setShow(true);
  };
  const hideNavbar = () => {
    setShow(false);
  };
  return (
    <>
      <GetNavbar type={type} onClick={showNavbar} data={data} />
      <GetNavbar type="mobile" active={show} onClick={hideNavbar} data={data} />
    </>
  );
}

export default function Navbar({ type, data }) {
  switch (type) {
    case "main":
      return <WholeNavbar type="main" data={data} />;
    case "static":
      return <WholeNavbar type="static" data={data} />;
    default:
      return <WholeNavbar type="main" data={data} />;
  }
}
