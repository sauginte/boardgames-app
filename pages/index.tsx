import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BoardgameType } from "@/types/boardgame";
import axios from "axios";
import Cookie from "js-cookie";
import Header from "../components/Header/Header";
import CardsWrapper from "@/components/CardsWrapper/CardsWrapper";

export default function Home() {
  const router = useRouter();
  const [boardgames, setBoardgames] = useState<BoardgameType[]>([]);

  const getAllBoardgames = async () => {
    try {
      const jwt = Cookie.get("user-jwt-token");

      const result = await axios.get("http://localhost:3005/games", {
        headers: { Authorization: jwt },
      });

      setBoardgames(result.data.games);
    } catch (err) {
      console.log(err);
      //@ts-expect-error TODO: fix error later
      if (err.status === 401) {
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    getAllBoardgames();
  }, []);

  return (
    <>
      <Header />
      <CardsWrapper boardgames={boardgames} />
    </>
  );
}
