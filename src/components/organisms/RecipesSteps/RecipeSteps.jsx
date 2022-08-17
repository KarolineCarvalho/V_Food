import styles from "./RecipeSteps.module.scss";
import recipeVideo from "/images/recipeVideo.png";
import { useState, useMemo } from "react";

import { Heading } from "@atoms";
import {
  Section,
  RecipesInfo,
  RecipesActions,
  NutritionInformation,
  CheckItem,
  ArticleAuthor,
} from "@molecules";
import { CardStack, RecipeCard, RecipesContent, SiteBanner } from "@molecules";

import { SubscriptionCard, ChefSection, RecipesCarousel } from "@organisms";
import useFetch from "@hooks/useFetch";

const RepiceSteps = () => {
  const maximumNumberRecipesShown = 3;

  const [recipes, recipesLoading, recipesFetchError] =
    useFetch("/data/data.json");

  return (
    <div className={styles.recipes}>
      <div className={styles.recipes__title}>
        <Heading>Health Japaese Fried Rice</Heading>
      </div>
      <div className={styles.recipes__info}>
        <RecipesInfo />
      </div>
      <div className={styles.recipes__actions}>
        <RecipesActions label="PRINT" icon="print" />
        <RecipesActions label="SHARE" icon="share" />
      </div>

      <img src={recipeVideo} className={styles.recipes__video} />

      <div className={styles.recipes__nutritionInfo}>
        <NutritionInformation />
      </div>

      <p className={styles.recipes__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className={styles.recipes__steps}>
        <RecipesContent />
      </div>
      <div className={styles.recipes__otherRecipes}>
        <Heading level={2}>Other Recipes</Heading>

        <CardStack>
          {!recipesLoading &&
            recipes
              .slice(0, maximumNumberRecipesShown)
              .map((recipe) => <RecipeCard key={recipe.id} {...recipe} />)}
        </CardStack>
      </div>
      <div className={styles.recipes__banner}>
        <SiteBanner />
      </div>
    </div>
  );
};

export default RepiceSteps;
