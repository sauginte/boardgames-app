import React, { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import axios from "axios";
import Cookie from "js-cookie";
import { BoardgameType } from "@/types/boardgame";
import BoardgameView from "@/components/BoardgameView/BoardgameView";
import { useRouter } from "next/router";
import Loading from "@/components/Loading/Loading";

const BoardgamePage = () => {
  const [game, setGame] = useState<BoardgameType | null>(null);
  const jwt = Cookie.get("user-jwt-token");

  const router = useRouter();

  const id = router.query.id as string;

  const fetchBoardgame = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:3005/games/${id}`, {
        headers: { Authorization: jwt },
      });

      setGame(response.data.game);

      console.log(response);
    } catch (err) {
      console.log(err);

      //@ts-expect-error TODO: fix error later
      if (err.status === 404) {
        router.push("/error");
      }
    }
  };

  useEffect(() => {
    id && fetchBoardgame(id);
  }, [id]);

  return (
    <div>
      <Header />
      {game ? <BoardgameView boardgame={game} /> : <Loading />}
    </div>
  );
};

export default BoardgamePage;
