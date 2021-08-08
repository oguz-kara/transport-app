import Link from "next/link";
import Image from "next/image";
import styles from "../styles/post-list.module.scss";
import PageIndexes from "./page-indexes";
import { AccessTime, Favorite, Sms } from "@material-ui/icons";

function PostCard({ post }) {
  return (
    <li className={styles.postCard}>
      <Link href="/" passHref>
        <a className={styles.image}>
          <Image
            width={360}
            height={240}
            src="/assets/images/_gallery-1.jpg"
            alt="post"
            layout="responsive"
          />
        </a>
      </Link>
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
        <Link href="/" passHref>
          <a>
            <h3 className={styles.title}>{post.title}</h3>
          </a>
        </Link>
        <p className={styles.description}>{post.description}</p>
        <Link href="/" passHref>
          <a>
            <button className={styles.btnReadMore}>read more</button>
          </a>
        </Link>
      </div>
    </li>
  );
}

export default function PostList({ posts }) {
  return (
    <div className={styles.container}>
      <ul className={styles.postCards}>
        <PostCard
          post={{
            date: "17 august",
            comments: 15,
            likes: 30,
            title: "How is it going",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at soluta obcaecati esse doloribus? Fugit atque animi suscipit earum ad?",
          }}
        />
        <PostCard
          post={{
            date: "17 august",
            comments: 15,
            likes: 30,
            title: "How is it going",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at soluta obcaecati esse doloribus? Fugit atque animi suscipit earum ad?",
          }}
        />
        <PostCard
          post={{
            date: "17 august",
            comments: 15,
            likes: 30,
            title: "How is it going",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at soluta obcaecati esse doloribus? Fugit atque animi suscipit earum ad?",
          }}
        />
        <PostCard
          post={{
            date: "17 august",
            comments: 15,
            likes: 30,
            title: "How is it going",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at soluta obcaecati esse doloribus? Fugit atque animi suscipit earum ad?",
          }}
        />
        <PostCard
          post={{
            date: "17 august",
            comments: 15,
            likes: 30,
            title: "How is it going",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at soluta obcaecati esse doloribus? Fugit atque animi suscipit earum ad?",
          }}
        />
        <PostCard
          post={{
            date: "17 august",
            comments: 15,
            likes: 30,
            title: "How is it going",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at soluta obcaecati esse doloribus? Fugit atque animi suscipit earum ad?",
          }}
        />
        <PostCard
          post={{
            date: "17 august",
            comments: 15,
            likes: 30,
            title: "How is it going",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at soluta obcaecati esse doloribus? Fugit atque animi suscipit earum ad?",
          }}
        />
        <PostCard
          post={{
            date: "17 august",
            comments: 15,
            likes: 30,
            title: "How is it going",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at soluta obcaecati esse doloribus? Fugit atque animi suscipit earum ad?",
          }}
        />
        <PostCard
          post={{
            date: "17 august",
            comments: 15,
            likes: 30,
            title: "How is it going",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at soluta obcaecati esse doloribus? Fugit atque animi suscipit earum ad?",
          }}
        />
      </ul>
      <div className={styles.pageIndexesContainer}>
        <PageIndexes />
      </div>
    </div>
  );
}
