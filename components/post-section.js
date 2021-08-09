import styles from "../styles/post-section.module.scss";
import Link from "next/link";
import Image from "next/image";
import { AccessTime, Favorite, Sms } from "@material-ui/icons";

export default function PostSection({ className, post }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.image}>
        <Image
          width={360}
          height={240}
          src="/assets/images/_gallery-1.jpg"
          alt="post"
          layout="responsive"
        />
      </div>
      <div className={styles.info}>
        <div className={styles.date}>
          <AccessTime className={styles.icon} />
          {post.date}
        </div>
        <div className={styles.likesComments}>
          <div className={styles.likes}>
            <span>
              <Favorite className={styles.icon} />
            </span>
            <span>{post.likes}</span>
          </div>
          <div className={styles.comments}>
            <span>
              <Sms className={styles.icon} />
            </span>
            <span>{post.comments}</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.description}>{post.post}</p>
      </div>
    </div>
  );
}
