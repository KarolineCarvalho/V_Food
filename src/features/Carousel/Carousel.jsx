import Card from "./Card/Card";
import styles from "./Carousel.module.scss";
import useFetch from "../../hooks/useFetch";

export default function Carousel() {
  const [data, loading, error] = useFetch("@/../data.json");

  function handleScrollRight(event) {
    event.currentTarget.parentNode.scrollBy({
      left: event.currentTarget.parentNode.offsetWidth / 2,
      behavior: "smooth",
    });
  }

  function handleScrollLeft(event) {
    event.currentTarget.parentNode.scrollBy({
      left: -event.currentTarget.parentNode.offsetWidth / 2,
      behavior: "smooth",
    });
  }

  return (
    <>
      <h2 className={styles["carousel__recipes"]}>
        Check out the delicious recipe
      </h2>
      <div className={styles["carouselWrapper"]}>
        <div className={styles["carousel"]}>
          <button
            type="button"
            onClick={handleScrollLeft}
            className={styles["carousel__scrollButton--left"]}
          ></button>
          <ul className={styles["card__list"]}>
            {!loading && data.map((card) => <Card card={card} key={card.id} />)}
          </ul>
          <button
            type="button"
            onClick={handleScrollRight}
            className={styles["carousel__scrollButton--right"]}
          ></button>
        </div>
      </div>
    </>
  );
}
