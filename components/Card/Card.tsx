import styles from "./styles.module.css";

type CardProps = {
  imgUrl: string;
  title: string;
  description: string;
};

const Card = ({ imgUrl, title, description }: CardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.photoWrapper}>
        <img src={imgUrl} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
