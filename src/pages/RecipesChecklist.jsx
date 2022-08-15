import Heading from "../components/atoms/heading/heading";
import "@/styles/recipesChecklist.scss";
import recipeVideo from "/images/recipeVideo.png";
import { useState, useMemo } from "react";
import {
  Section,
  RecipesInfo,
  RecipesActions,
  NutritionInformation,
  CheckItem,
  ArticleAuthor,
} from "@molecules";
import {
  CardStack,
  RecipeCard,
  RecipesContent,
  SiteBanner,
} from "../components/molecules";

import { SubscriptionCard, ChefSection, RecipesCarousel } from "@organisms";
import useFetch from "@hooks/useFetch";
import { RecipeSteps } from "../components/organisms";

const RecipesChecklist = () => {
  const maximumNumberRecipesShown = 3;

  const [recipes, recipesLoading, recipesFetchError] =
    useFetch("@/../data.json");

  return (
    <div className="recipes">
      <Section>
        <RecipeSteps />
      </Section>

      <Section arialabel="Subscription Card">
        <SubscriptionCard />
      </Section>
      <Section arialabel="Recipes Carousel">
        <RecipesCarousel />
      </Section>
    </div>
  );
};

export default RecipesChecklist;
