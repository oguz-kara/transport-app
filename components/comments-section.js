import Image from "next/image";
import Text from "./text";
import styles from "../styles/commets-section.module.scss";
import { Reply } from "@material-ui/icons";

function Comment({ comment, style }) {
  return (
    <div className={styles.commentContainer} style={style}>
      <div className={styles.avatar}>
        <Image
          width={50}
          height={50}
          alt="avatar"
          src={comment.avatarSrc}
          className={styles.avatarImage}
          layout="fixed"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.commentInfo}>
          <span className={styles.author}>
            by <span className={styles.yellow}>{comment.author}</span>
          </span>
          <span className={styles.date}>{comment.date}</span>
          <span className={styles.hour}>{comment.hours}</span>
        </div>
        <div className={styles.comment}>{comment.comment}</div>
        <button className={styles.replyBtn}>
          <span>
            <Reply className={styles.icon} />
          </span>
          <span>reply</span>
        </button>
      </div>
    </div>
  );
}

export default function CommetsSection({ comments }) {
  console.log("comments section ", comments);
  return (
    <div className={styles.container}>
      <Text type="h1" size="large" className={styles.title}>
        4 Comments
      </Text>
      {comments.map((comment, index) => (
        <div key={index} className={styles.commentGroup}>
          <Comment comment={comment} />
          {comment.replys.length > 0 &&
            comment.replys.map((reply, index) => (
              <Comment key={index} comment={reply} style={{ marginLeft: 60 }} />
            ))}
        </div>
      ))}
    </div>
  );
}
