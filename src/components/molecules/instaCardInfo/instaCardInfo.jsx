import styles from "./instaCardInfo.module.scss";

const InstaCardInfo = (props) => {
  const postDate = new Date(props.date);
  const date = postDate.toLocaleString("en-US", {
    month: "long",
    day: "2-digit",
  });

  return (
    <div className={styles.infoContainer}>
      <p className={styles.postCaption}>
        <span className={styles.postAuthor}>{props.username}</span>{" "}
        {props.caption}
      </p>
      <p className={styles.postDate}>{date}</p>
    </div>
  );
};

export default InstaCardInfo;
