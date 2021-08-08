import Link from "next/link";
import styles from "../styles/blog-sidebar.module.scss";
import { ChevronRight, Search } from "@material-ui/icons";
import Text from "./text";

export default function BlogSidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <Text type="h1" className={styles.header}>
          Categories
        </Text>
        <Link href="/" passHref>
          <a className={styles.category}>
            <ChevronRight className={styles.chevronIcon} />
            get taxi
          </a>
        </Link>
        <Link href="/" passHref>
          <a className={styles.category}>
            <ChevronRight className={styles.chevronIcon} />
            Our Cars
          </a>
        </Link>
        <Link href="/" passHref>
          <a className={styles.category}>
            <ChevronRight className={styles.chevronIcon} />
            get taxi
          </a>
        </Link>
        <Link href="/" passHref>
          <a className={styles.category}>
            <ChevronRight className={styles.chevronIcon} />
            Business Services
          </a>
        </Link>
        <Link href="/" passHref>
          <a className={styles.category}>
            <ChevronRight className={styles.chevronIcon} />
            Popular Routes
          </a>
        </Link>
        <Link href="/" passHref>
          <a className={styles.category}>
            <ChevronRight className={styles.chevronIcon} />
            city traffics
          </a>
        </Link>
        <Link href="/" passHref>
          <a className={styles.category}>
            <ChevronRight className={styles.chevronIcon} />
            terms and conditions
          </a>
        </Link>
      </div>
      <div className={styles.search}>
        <Text type="h1" className={`${styles.header} ${styles.mt70}`}>
          Search
        </Text>
        <div className={styles.searchBar}>
          <input
            type="text"
            name="search"
            id={styles.searchInp}
            placeholder="Search for..."
          />
          <Search style={{ color: "#868686" }} />
        </div>
      </div>
    </div>
  );
}
