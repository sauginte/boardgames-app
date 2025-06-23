import React, { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import axios from "axios";
import Cookie from "js-cookie";
import { BoardgameType } from "@/types/boardgame";
import styles from "./styles.module.css";

const BoardgamePage = () => {
  const [game, setGame] = useState<BoardgameType | null>(null);
  const jwt = Cookie.get("user-jwt-token");
  const fetchBoardgame = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:3005/games/${id}`, {
        headers: { Authorization: jwt },
      });

      setGame(response.data.game);

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBoardgame("80847650-617b-4218-817d-3df47a183b53");
  }, []);
  return (
    <div>
      <Header />
      {game ? (
        <div className={styles.container}>
          <h2>{game.title}</h2>
          <div className={styles.mainContent}>
            <div className={styles.imageWrapper}>
              <img src={game.imgUrl} alt="" />
            </div>

            <div className={styles.boardgameInfo}>
              <div className={styles.rating}>{game.rating}</div>

              <div className={styles.info}>
                <h4>Year: {game.releaseYear}</h4>
                <h4>Dificulty: {game.dificulty} / 5</h4>
                <h4>Play time: {game.playTimeMin} min.</h4>
              </div>

              <p>{game.description}</p>

              <div className={styles.otherInfo}>
                <h4>
                  Can play: <span>{game.canPlayPersons} persons</span>
                </h4>
                <h4>
                  Best play: <span>{game.bestPlayPersons} persons</span>
                </h4>
                <h4>
                  Box size: <span>{game.boxSize}</span>
                </h4>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      ) : (
        <>Loading</>
      )}
    </div>
  );
};

export default BoardgamePage;
