import styles from "./AboutUsQnA.module.scss";
import womanCooking from "/images/womanCooking.png";
import { Heading } from "@atoms";

const AboutUsQnA = () => {
  return (
    <div>
      <p className={styles.question}>
        How did you start out in the food industry?
      </p>
      <p className={styles.answer}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
        ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
        sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id
        mollis ex. Praesent feugiat elementum ex ut suscipit.
      </p>

      <p className={styles.question}>What do you like most about your job?</p>
      <p className={styles.answer}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
        ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
        sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id
        mollis ex. Praesent feugiat elementum ex ut suscipit.
      </p>

      <p className={styles.question}>Do you cook at home on your days off?</p>
      <img src={womanCooking} alt="Woman Cooking" className={styles.img} />
      <p className={styles.answer}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
        ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
        sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id
        mollis ex. Praesent feugiat elementum ex ut suscipit.
      </p>

      <p className={styles.question}>
        What would your advice be to young people looking to get their foot in
        the door?
      </p>
      <p className={styles.answer}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
        ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
        sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id
        mollis ex. Praesent feugiat elementum ex ut suscipit.
      </p>

      <div className={styles.quote}>
        <p className={styles.quote__text}>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio.”
        </p>
      </div>

      <p className={styles.question}>
        What is the biggest misconception that people have about being a
        professional chef?
      </p>
      <p className={styles.answer}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
        ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
        sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id
        mollis ex. Praesent feugiat elementum ex ut suscipit.
      </p>
    </div>
  );
};

export default AboutUsQnA;
