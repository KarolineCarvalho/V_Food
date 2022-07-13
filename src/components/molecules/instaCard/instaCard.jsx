import InstaCardActions from "../instaCardActions/instaCardActions";
import InstaCardHeader from "../instaCardHeader/instaCardHeader";
import InstaCardInfo from "../instaCardInfo/instaCardInfo";
import InstaCardMedia from "../instaCardMedia/instaCardMedia";
import styles from "./instaCard.module.scss";

const InstaCard = (props) => {
  /* console.log(props.postInfo.id); */
  return (
    <a
      className={styles.cardContainer}
      href={props.postInfo.permalink}
      target="_blank"
    >
      <InstaCardHeader username={props.postInfo.username} />
      <InstaCardMedia
        mediaId={props.postInfo.id}
        mediaType={props.postInfo.media_type}
        mediaLink={props.postInfo.media_url}
      />
      <InstaCardActions />
      <InstaCardInfo
        username={props.postInfo.username}
        caption={props.postInfo.caption}
        date={props.postInfo.timestamp}
      />
    </a>
  );
};

export default InstaCard;
