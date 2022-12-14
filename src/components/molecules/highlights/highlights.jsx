import styles from "./highlights.module.scss";
import { useState } from "react";
import { Carousel, HighlightCard, IFrameYTB } from "@molecules";

export default function Highlights() {
  const [playing, setPlaying] = useState(false);
  const [videoID, setVideoID] = useState(null);

  const cards = [
    {
      title: "Baked Chicken Wings",
      description:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
      image:
        "/images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png",
      id: "1",
      movie: "dQw4w9WgXcQ",
    },
    {
      title: "Baked Chicken Wings",
      description:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
      image:
        "/images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png",
      id: "2",
      movie: "ub1WfnpqXFc",
    },
    {
      title: "Baked Chicken Wings",
      description:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
      image:
        "/images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png",
      id: "3",
      movie: "u54aQPzwbWc",
    },
    {
      title: "Baked Chicken Wings",
      description:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
      image:
        "/images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png",
      id: "4",
      movie: "EZ-MXloBm1Q",
    },
    {
      title: "Baked Chicken Wings",
      description:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
      image:
        "/images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png",
      id: "5",
      movie: "gKCdJSY3n38",
    },
  ];

  return (
    <div className={styles.highlights}>
      <IFrameYTB
        playing={playing}
        setPlaying={() => setPlaying(!playing)}
        videoID={videoID}
      />

      <Carousel scrolling={true} withArrows={false}>
        {cards.map((card) => {
          return (
            <li className={styles.highlights__item} key={card.id}>
              <HighlightCard
                title={card.title}
                description={card.description}
                image={card.image}
                videoID={card.movie}
                setVideoID={() => setVideoID(card.movie)}
                playing={playing}
                setPlaying={() => setPlaying(!playing)}
              />
            </li>
          );
        })}
      </Carousel>
    </div>
  );
}
