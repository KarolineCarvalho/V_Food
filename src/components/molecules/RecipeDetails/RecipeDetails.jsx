import styles from "./RecipeDetails.module.scss";

import { ForkIcon, TimerIcon } from "../../atoms";

const RecipeDetails = ({ detailTitle, detail, detailImg = true }) => {
  return (
    <div className={styles.recipeDetails}>
      {detailImg === true ? <TimerIcon /> : <ForkIcon />}
      <div>
        <p className={styles.recipeDetails__title}>{detailTitle}</p>
        <p className={styles.recipeDetails__detail}>{detail}</p>
      </div>
    </div>
  );
};
export default RecipeDetails;
