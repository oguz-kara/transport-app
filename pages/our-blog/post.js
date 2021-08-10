import CommentsSection from "../../components/comments-section";
import PostSection from "../../components/post-section";
import BlogSidebar from "../../components/blog-siderbar";
import styles from "../../styles/post.module.scss";
import Topbar from "../../components/topbar";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import fakeData from "../../fake_data.json";

export default function Post() {
  return (
    <div className={styles.container}>
      <Topbar />
      <Navbar type="main" data={fakeData.navLinks} />
      <Hero pageName="post" />
      <div className={styles.main}>
        <PostSection className={styles.postSection} post={fakeData.posts[0]} />
        <BlogSidebar className={styles.blogSidebar} />
      </div>
      <div className={styles.comments}>
        <CommentsSection comments={fakeData.comments} />
      </div>
    </div>
  );
}
