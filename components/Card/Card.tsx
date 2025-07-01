import styles from "./styles.module.css";
import Link from "next/link";

type CardProps = {
  imgUrl: string;
  title: string;
  description: string;
  id: string;
};

const Card = ({ id, imgUrl, title, description }: CardProps) => {
  const textLimit = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  return (
    <Link href={`/boardgame/${id}`} className={styles.container}>
      <div className={styles.photoWrapper}>
        <img src={imgUrl} />
      </div>
      <div className={styles.aboutGame}>
        <h2>{title}</h2>
        <p>{textLimit(description, 500)}</p>
      </div>
    </Link>
  );
};

export default Card;
