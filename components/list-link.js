import { useState } from "react";
import Link from "next/link";
import styles from "../styles/list-link.module.scss";
import { ChevronRight } from "@material-ui/icons";

export default function ListLink({ children, href, data }) {
  const [show, setShow] = useState(false);
  const isCollapseable = data.innerLinks.length > 0;

  const handleClick = (e) => {
    setShow(!show);
  };

  return (
    <li
      className={`${styles.listItem} ${show && styles.active} ${
        !show && styles.bgWhite
      }`}
      onClick={(e) => handleClick(e)}
    >
      {!isCollapseable ? (
        <Link href={data.href ? data.href : "/"} passHref>
          <a className={styles.navbarLink}>
            <span>{children}</span>
          </a>
        </Link>
      ) : (
        <div className={styles.collapseHeader}>
          <span>{children}</span>
          <span className={show && styles.rotate90}>
            <ChevronRight className={styles.chevronRightIcon} />
          </span>
        </div>
      )}
      {isCollapseable && (
        <ul className={`${styles.collapseMenu} ${show && styles.active}`}>
          {data.innerLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.href} passHref>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
