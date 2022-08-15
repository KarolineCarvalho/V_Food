import { Heading } from "@atoms";
import { CheckItem } from "@molecules";
import styles from "./RecipesContent.module.scss";
import cookingWoman from "/images/womanCooking.png";

const RecipesContent = () => {
  return (
    <div>
      <Heading level={2}>Ingredients</Heading>
      <Heading level={3}>For main dish</Heading>
      <ul className={styles.checkItem}>
        <CheckItem>
          <p>Lorem ipsum dolor sit amet</p>
        </CheckItem>
        <CheckItem>
          <p>Lorem ipsum dolor sit amet</p>
        </CheckItem>
        <CheckItem>
          <p>Lorem ipsum dolor sit amet</p>
        </CheckItem>
        <CheckItem>
          <p>Lorem ipsum dolor sit amet</p>
        </CheckItem>
        <CheckItem>
          <p>Lorem ipsum dolor sit amet</p>
        </CheckItem>
      </ul>
      <Heading level={3}>For the sauce</Heading>
      <ul className={styles.checkItem}>
        <CheckItem>
          <p>Lorem ipsum dolor sit amet</p>
        </CheckItem>
        <CheckItem>
          <p>Lorem ipsum dolor sit amet</p>
        </CheckItem>
        <CheckItem>
          <p>Lorem ipsum dolor sit amet</p>
        </CheckItem>
      </ul>
      <Heading level={2}>Directions</Heading>
      <ol className={styles.checkItem}>
        <CheckItem>
          <p className={styles.checkItem__title}>
            1. Lorem ipsum dolor sit amet
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
          <img src={cookingWoman} className={styles.checkItem__img} />
        </CheckItem>
        <CheckItem>
          <p className={styles.checkItem__title}>
            2. Lorem ipsum dolor sit amet
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
        </CheckItem>
        <CheckItem>
          <p className={styles.checkItem__title}>
            3. Lorem ipsum dolor sit amet
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
        </CheckItem>
      </ol>
    </div>
  );
};

export default RecipesContent;
