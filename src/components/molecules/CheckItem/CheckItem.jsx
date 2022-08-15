import { useState } from "react";
import styles from "./CheckItem.module.scss";

const CheckItem = ({ children }) => {
  const [check, setCheck] = useState(false);

  const toggleCheck = () => {
    setCheck((prevState) => ({
      ...prevState,
      check: !prevState.check,
    }));
  };

  const classes = !check.check ? styles["content"] : styles["content--checked"];

  return (
    <li className={styles.checkItemContainer}>
      <label className={styles.checkItem}>
        <input type="checkbox" onChange={toggleCheck} />

        <span className={styles.checkmark} />
        <div className={classes}>{children}</div>
      </label>
    </li>
  );
};

export default CheckItem;
