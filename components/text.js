import styles from "../styles/text.module.scss";

const H2 = ({ text, className, style }) => {
  return (
    <h2 style={style} className={className}>
      {text}
    </h2>
  );
};
const H4 = ({ text, className, style }) => {
  return (
    <h4 style={style} className={className}>
      {text}
    </h4>
  );
};
const P = ({ text, className, style }) => {
  return (
    <p style={style} className={className}>
      {text}
    </p>
  );
};

export default function Text({ type, children, size, style }) {
  const getSize = (size) => {
    switch (size) {
      case "small":
        return styles.small;
      case "medium":
        return styles.medium;
      case "large":
        return styles.large;
      case "xLarge":
        return styles.xLarge;
      case "xSmall":
        return styles.xSmall;
      default:
        return styles.medium;
    }
  };
  switch (type) {
    case "h1":
      return (
        <H2
          style={style}
          text={children}
          className={`${styles.h1} ${getSize(size)} `}
        />
      );
    case "yellow":
      return (
        <H4
          style={style}
          text={children}
          className={`${styles.yellow} ${getSize(size)}`}
        />
      );
    case "p":
      return (
        <P
          style={style}
          text={children}
          className={`${styles.p} ${getSize(size)}`}
        />
      );
    default:
      return <span>type bulunmuyor</span>;
  }
}
