import PostList from "../../components/post-list";
import Navbar from "../../components/navbar";
import Topbar from "../../components/topbar";
import Hero from "../../components/hero";
import styles from "../../styles/blog.module.scss";
import fakeData from "../../fake_data.json";
import BlogSidebar from "../../components/blog-siderbar";

export default function Posts() {
  return (
    <div className={styles.container}>
      <Topbar />
      <Navbar type="main" data={fakeData.navLinks} />
      <Hero pageName="our blog" />
      <div className={styles.main}>
        <PostList posts={fakeData.posts} />
        <BlogSidebar />
      </div>
    </div>
  );
}
