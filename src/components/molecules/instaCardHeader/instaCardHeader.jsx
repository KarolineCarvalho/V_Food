import styles from "./instaCardHeader.module.scss";
import ProfileImg from "/images/perfil_img.png";

const InstaCardHeader = (props) => {
  return (
    <div className={styles.headerContainer}>
      <img src={ProfileImg} className={styles.profileImg} />
      <p className={styles.username}>{props.username}</p>
      <p className={styles.location}>Tokyo, Japan</p>
    </div>
  );
};

export default InstaCardHeader;
