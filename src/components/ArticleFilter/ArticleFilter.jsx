import styles from "./ArticleFilter.module.scss";
import SubmitButton from "../submitButton/submitButton";

export default function ArticleFilter(props) {
  return (
    <div className={styles.article__filter}>
      <form
        action=""
        className={styles.article__form}
        onSubmit={props.handleSearch}
      >
        <input
          type="text"
          className={styles.article__input}
          placeholder="Search article, news or recipe..."
        />
        <button type="submit" className={styles["article__button--mobile"]}>
          <img
            src="images/searchIcon.svg"
            alt=""
            className={styles.article__buttonImage}
          />
        </button>
        <div className={styles["article__button--desktop"]}>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
