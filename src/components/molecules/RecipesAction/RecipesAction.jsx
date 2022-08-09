import { PrinterIcon, ShareIcon } from "../../atoms";
import styles from "./RecipesActions.module.scss";

const RecipesActions = ({ label, icon }) => {
  return (
    <div className={styles.RecipeAction}>
      <div className={styles.RecipeAction__icon}>
        {icon === "print" ? <PrinterIcon /> : <ShareIcon />}
      </div>

      <div className={styles.RecipeAction__label}>{label}</div>
    </div>
  );
};

export default RecipesActions;
