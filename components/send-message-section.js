import styles from "../styles/send-message-section.module.scss";
export default function SendMessageSection() {
  return (
    <form className={styles.container}>
      <h2>SEND MESSAGE</h2>
      <div className={styles.inputText}>
        <label className={styles.title} htmlFor="name">
          Your Name: <span className={styles.red}>*</span>{" "}
        </label>
        <input
          className={styles.input}
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
        />
      </div>
      <div className={styles.inputText}>
        <label className={styles.title} htmlFor="name">
          E-mail <span className={styles.red}>*</span>{" "}
        </label>
        <input
          className={styles.input}
          type="text"
          name="email"
          id="email"
          placeholder="E-mail"
        />
      </div>
      <div className={styles.inputText}>
        <label className={styles.title} htmlFor="name">
          Message <span className={styles.red}>*</span>{" "}
        </label>
        <textarea
          className={styles.input}
          name="message"
          id="message"
          placeholder="Your Message"
          rows="7"
        />
      </div>
      <button className={styles.sendBtn}>send</button>
    </form>
  );
}
