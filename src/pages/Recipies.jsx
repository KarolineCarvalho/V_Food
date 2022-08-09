import Heading from "../components/atoms/heading/heading";
import ArticleAuthor from "../components/molecules/articleAuthor/articleAuthor";
import RecipiesInfo from "@molecules/RecipiesInfo/RecipiesInfo";
import RecipesActions from "../components/molecules/RecipesAction/RecipesAction";
import recipeVideo from "/images/recipeVideo.png";
import NutritionInformation from "../components/molecules/nutritionInformation/NutritionInformation";

const Recipes = () => {
  return (
    <div>
      <Heading>Health Japaese Fried Rice</Heading>
      <RecipiesInfo />
      <div>
        <RecipesActions label="PRINT" icon="print" />
        <RecipesActions label="SHARE" icon="share" />
      </div>
      {/* <img src={recipeVideo} /> */}
      <NutritionInformation />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default Recipes;
