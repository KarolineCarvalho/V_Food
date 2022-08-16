import styles from "./AboutUsContent.module.scss";
import { Heading } from "@atoms";
import { ArticleAuthor, SocialMedia, AboutUsQnA } from "@molecules";
import authorImg from "/images/JohnSmith.png";
import cookingPan from "/images/cooking-pan-fire.png";

const AboutUsContent = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutUs__title}>
        <Heading>Full Guide to Becoming a Professional Chef</Heading>
      </div>
      <div className={styles.aboutUs__author}>
        <ArticleAuthor
          className="authorContainer"
          authorImg={authorImg}
          articleAuthor="John Smith"
          articleDate="15 March 2022"
          inline={true}
        />
      </div>

      <p className={styles.aboutUs__description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
        ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
        sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
      </p>
      <img src={cookingPan} className={styles.aboutUs__img} />
      <div className={styles.aboutUs__socialMedia}>
        <p>SHARE THIS ON:</p>
        <SocialMedia class={"--vertical"} />
      </div>
      <div className={styles.aboutUs__QnA}>
        <AboutUsQnA />
      </div>
    </div>
  );
};

export default AboutUsContent;
