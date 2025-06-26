import { BoardgameType } from "@/types/boardgame";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import Cookie from "js-cookie";

type BoardgameViewProps = {
  boardgame: BoardgameType;
};

const BoardgameView = ({ boardgame }: BoardgameViewProps) => {
  const router = useRouter();
  const jwt = Cookie.get("user-jwt-token");

  const id = router.query.id as string;

  const deleteBoardgame = async (id: string) => {
    try {
      const response = await axios.delete(`http://localhost:3005/games/${id}`, {
        headers: { Authorization: jwt },
      });

      if (response.status === 200) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onDaleteBoardgame = () => {
    deleteBoardgame(id);
  };

  return (
    <div className={styles.container}>
      <h2>{boardgame.title}</h2>
      <div className={styles.mainContent}>
        <div className={styles.imageWrapper}>
          <img src={boardgame.imgUrl} alt="" />
        </div>

        <div className={styles.boardgameInfo}>
          <div
            className={`${styles.rating} 
            ${boardgame.rating > 8 && styles.ratingGreen} 
            ${boardgame.rating < 6 && styles.ratingRed}
            ${
              boardgame.rating < 8 &&
              boardgame.rating > 6 &&
              styles.ratingYellow
            }`}
          >
            {boardgame.rating}
          </div>

          <div className={styles.info}>
            <h4>Year: {boardgame.releaseYear}</h4>
            <h4>Dificulty: {boardgame.dificulty} / 5</h4>
            <h4>Play time: {boardgame.playTimeMin} min.</h4>
          </div>

          <p>{boardgame.description}</p>

          <div className={styles.otherInfo}>
            <h4>
              Can play:{" "}
              <span>
                {boardgame.canPlayPersons[0]} - {boardgame.canPlayPersons[4]}{" "}
                persons
              </span>
            </h4>
            <h4>
              Best play:{" "}
              <span>
                {boardgame.bestPlayPersons[0]} - {boardgame.bestPlayPersons[3]}{" "}
                persons
              </span>
            </h4>
            <h4>
              Box size: <span>{boardgame.boxSize}</span>
            </h4>
            <button onClick={onDaleteBoardgame} className={styles.deleteBtn}>
              Delete
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default BoardgameView;
