import styles from "./styles.module.css";
import Link from "next/link";

type CardProps = {
  imgUrl: string;
  title: string;
  description: string;
  id: string;
};

const Card = ({ id, imgUrl, title, description }: CardProps) => {
  return (
    <Link href={`/boardgame/${id}`} className={styles.container}>
      <div className={styles.photoWrapper}>
        <img src={imgUrl} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Card;
