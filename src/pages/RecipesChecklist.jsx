import "@/styles/recipesChecklist.scss";

import { Section } from "@molecules";
import { SubscriptionCard, RecipesCarousel } from "@organisms";
import { RecipeSteps } from "../components/organisms";

const RecipesChecklist = () => {
  return (
    <div className="recipes">
      <Section arialabel="Recipe Checklist">
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
