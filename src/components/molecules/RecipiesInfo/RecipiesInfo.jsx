import { Divider } from "../../atoms";
import ArticleAuthor from "../articleAuthor/articleAuthor";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import styles from "./RecipesInfo.module.scss";
import authorImg from "/images/JohnSmith.png";

const RecipiesInfo = () => {
  return (
    <div className={styles.recipiesInfo}>
      <ArticleAuthor
        className="authorContainer"
        authorImg={authorImg}
        articleAuthor="John Smith"
        articleDate="15 March 2022"
      />
      <Divider />
      <RecipeDetails detailTitle="PREP TIME" detail="15 Minutes" />
      <Divider />
      <RecipeDetails detailTitle="COCK TIME" detail="15 Minutes" />
      <Divider />
      <RecipeDetails detail="Chicken" detailImg={false} />
    </div>
  );
};

export default RecipiesInfo;
