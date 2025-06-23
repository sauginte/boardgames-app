import styles from "./styles.module.css";
import { BoardgameType } from "@/types/boardgame";
import Card from "../Card/Card";

type CardsWrapperProps = {
  boardgames: BoardgameType[];
};

const CardsWrapper = ({ boardgames }: CardsWrapperProps) => {
  return (
    <div className={styles.container}>
      {boardgames.map((b) => {
        return (
          <Card
            key={b.id}
            id={b.id}
            imgUrl={b.imgUrl}
            title={b.title}
            description={b.description}
          />
        );
      })}
    </div>
  );
};

export default CardsWrapper;
