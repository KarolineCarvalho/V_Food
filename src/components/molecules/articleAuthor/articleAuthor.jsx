import styles from "./articleAuthor.module.scss";
import { Divider } from "@atoms";

const ArticleAuthor = ({
  authorImg,
  articleAuthor,
  articleDate,
  inline = false,
}) => {
  const layout = inline === false ? "authorInfo" : "authorInfo--inline";
  const dividerIsVisible = inline === false ? "divider" : "divider--inline";
  console.log(layout);
  return (
    <div className={styles.articleAuthorContainer}>
      <img src={authorImg} className={styles.authorImg} />
      <div className={styles[`${layout}`]}>
        <p className={styles.authorInfo__authorName}>{articleAuthor}</p>
        <div className={styles[`authorInfo__${dividerIsVisible}`]}>
          <Divider />
        </div>
        <p className={styles.authorInfo__articleDate}>{articleDate}</p>
      </div>
    </div>
  );
};

export default ArticleAuthor;
