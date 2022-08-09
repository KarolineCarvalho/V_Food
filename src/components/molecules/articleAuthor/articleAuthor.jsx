import styles from "./articleAuthor.module.scss";

const ArticleAuthor = ({ authorImg, articleAuthor, articleDate }) => {
  return (
    <div className={styles.articleAuthorContainer}>
      <img src={authorImg} className={styles.authorImg} />
      <div>
        <p className={styles.authorName}>{articleAuthor}</p>
        <p className={styles.articleDate}>{articleDate}</p>
      </div>
    </div>
  );
};

export default ArticleAuthor;
