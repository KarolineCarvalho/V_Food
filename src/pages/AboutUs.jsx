/* import "@/styles/recipesChecklist.scss"; */
import { Section } from "@molecules";
import { SubscriptionCard, RecipesCarousel } from "@organisms";
import { AboutUsContent } from "../components/organisms";

const AboutUs = () => {
  return (
    <>
      <Section arialabel="About Us">
        <AboutUsContent />
      </Section>
      <Section arialabel="Subscription Card">
        <SubscriptionCard />
      </Section>
      <Section arialabel="Recipes Carousel">
        <RecipesCarousel />
      </Section>
    </>
  );
};

export default AboutUs;
