import { Heading } from "../../atoms";
import styles from "./NutritionInformation.module.scss";

const NutritionInformation = () => {
  const itemNameClass = styles.nutritionalItems__itemName;
  const itemValueClass = styles.nutritionalItems__itemValue;
  return (
    <div className={styles.nutritionInformation}>
      <div>
        <Heading level={2}>Nutrition Information</Heading>
        <table className={styles.nutritionalItems}>
          <tr>
            <td className={itemNameClass}>Calories</td>
            <td className={itemValueClass}>219.9 kcal</td>
          </tr>
          <tr>
            <td className={itemNameClass}>Total Fat</td>
            <td className={itemValueClass}>10.7 g</td>
          </tr>
          <tr>
            <td className={itemNameClass}>Protein</td>
            <td className={itemValueClass}>7.9 g</td>
          </tr>
          <tr>
            <td className={itemNameClass}>Cholesterol</td>
            <td className={itemValueClass}>37.4 mg</td>
          </tr>
        </table>
      </div>

      <p>
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
    </div>
  );
};

export default NutritionInformation;
