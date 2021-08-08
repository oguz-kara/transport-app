import Link from "next/link";
import Image from "next/image";
import styles from "../styles/post-list.module.scss";
import PageIndexes from "./page-indexes";
import { AccessTime, Favorite, Sms } from "@material-ui/icons";
import { useState } from "react";

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
  const data = {
    maxCardPerPage: 6,
    indexRenderCount: 4,
  };
  const getInitialCards = (posts) => {
    return posts.slice(0, data.maxCardPerPage);
  };
  const [currentPosts, setCurrentPosts] = useState(getInitialCards(posts));

  const updateCurrentPosts = (currentIndex, maxCardPerPage, posts) => {
    try {
      const postsEnd = currentIndex * maxCardPerPage;
      setCurrentPosts(posts.slice(postsEnd - maxCardPerPage, postsEnd));
    } catch (err) {
      const postsEnd = (currentIndex - 1) * maxCardPerPage;
      setCurrentPosts(posts.slice(postEnd));
    }
  };

  return (
    <div className={styles.container}>
      <ul className={styles.postCards}>
        {currentPosts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}

        {/*
  
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
  
  */}
      </ul>
      <div className={styles.pageIndexesContainer}>
        <PageIndexes
          posts={posts}
          data={data}
          updateCurrentCards={updateCurrentPosts}
        />
      </div>
    </div>
  );
}
