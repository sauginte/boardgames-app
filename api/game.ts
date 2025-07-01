import axios from "axios";
import { config } from "../config";

type fetchAllBoardgamesProps = {
  jwt: string;
};

export const fetchAllBoardgames = async ({ jwt }: fetchAllBoardgamesProps) => {
  try {
    const result = await axios.get(`${config.BASE_URL}/games`, {
      headers: { Authorization: jwt },
    });

    return result;
  } catch (err) {
    throw err;
  }
};

type InsertGameProps = {
  jwt: string;
  boardgameBody: object;
};

export const insertGame = async ({ jwt, boardgameBody }: InsertGameProps) => {
  try {
    const response = await axios.post(
      `${config.BASE_URL}/games/`,
      boardgameBody,
      {
        headers: { Authorization: jwt },
      }
    );

    return response;
  } catch (err) {
    throw err;
  }
};

type fetchBoardgameByIdProps = {
  id: string;
  jwt: string;
};

export const fetchBoardgameById = async ({
  id,
  jwt,
}: fetchBoardgameByIdProps) => {
  try {
    const response = await axios.get(`${config.BASE_URL}/games/${id}`, {
      headers: { Authorization: jwt },
    });

    return response;
  } catch (err) {
    throw err;
  }
};
