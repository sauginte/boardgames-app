import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import { BoardgameType } from "@/types/boardgame";
import BoardgameView from "@/components/BoardgameView/BoardgameView";
import { useRouter } from "next/router";
import Loading from "@/components/Loading/Loading";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { fetchBoardgameById } from "@/api/game";

const BoardgamePage = () => {
  const [game, setGame] = useState<BoardgameType | null>(null);
  const jwt = Cookie.get("user-jwt-token");

  const router = useRouter();

  const id = router.query.id as string;

  const fetchBoardgame = async (id: string) => {
    try {
      const response = await fetchBoardgameById({ id: id, jwt: jwt! });

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
    <PageTemplate>
      {game ? <BoardgameView boardgame={game} /> : <Loading />}
    </PageTemplate>
  );
};

export default BoardgamePage;
