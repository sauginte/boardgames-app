import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import Cookies from "js-cookie";
import Button from "../Button/Button";

const InsertBoardgame = () => {
  const jwt = Cookies.get("user-jwt-token");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [playTime, setPlayTime] = useState("");
  const [startAge, setStartAge] = useState("");
  const [rating, setRating] = useState("");
  const [dificulty, setDificulty] = useState("");
  const [boxSize, setBoxSize] = useState("");
  const [ratingCount, setRatingCount] = useState("");
  const [canPlayPersons, setCanPlayPersons] = useState("");
  const [bestPlayPersons, setBestPlayPersons] = useState("");

  const canPlayPersonsArray = canPlayPersons
    .split(",")
    .map((val) => parseInt(val.trim()))
    .filter((val) => !isNaN(val));

  const bestPlayPersonsArray = bestPlayPersons
    .split(",")
    .map((val) => parseInt(val.trim()))
    .filter((val) => !isNaN(val));

  const onSubmit = async () => {
    try {
      const boardgameBody = {
        title: title,
        description: description,
        imgUrl: imgUrl,
        releaseYear: releaseYear,
        playTimeMin: playTime,
        bestStartPlayAtAge: startAge,
        rating: rating,
        dificulty: dificulty,
        boxSize: boxSize,
        ratingCount: ratingCount,
        canPlayPersons: canPlayPersonsArray,
        bestPlayPersons: bestPlayPersonsArray,
      };

      const response = await axios.post(
        "http://localhost:3005/games/",
        boardgameBody,
        { headers: { Authorization: jwt } }
      );
      Cookies.set("user-jwt-token", response.data.jwt);
      console.log(boardgameBody);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className={styles.form}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Image URL</label>
        <input
          type="text"
          name="imgUrl"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <label>Release year</label>
        <input
          type="number"
          name="releaseYear"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        />
        <label>Minimum play time</label>
        <input
          type="number"
          name="playTime"
          value={playTime}
          onChange={(e) => setPlayTime(e.target.value)}
        />
        <label>Best age start to play</label>
        <input
          type="number"
          name="bestStartPlayAtAge"
          value={startAge}
          onChange={(e) => setStartAge(e.target.value)}
        />
        <label>Rating</label>
        <input
          type="number"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <label>Dificulty</label>
        <input
          type="number"
          name="dificulty"
          value={dificulty}
          onChange={(e) => setDificulty(e.target.value)}
        />
        <label>Rating count</label>
        <input
          type="number"
          name="ratingCount"
          value={ratingCount}
          onChange={(e) => setRatingCount(e.target.value)}
        />
        <label>Box size</label>
        <input
          type="text"
          name="boxSize"
          value={boxSize}
          onChange={(e) => setBoxSize(e.target.value)}
        />
        <label>Can play persons</label>
        <input
          type="text"
          name="canPlayPersons"
          value={canPlayPersons}
          onChange={(e) => setCanPlayPersons(e.target.value)}
        />
        <label>Best play persons</label>
        <input
          type="text"
          name="bestPlayPersons"
          value={bestPlayPersons}
          onChange={(e) => setBestPlayPersons(e.target.value)}
        />
        <Button title="Submit" type="DEFAULT" onClick={onSubmit} />
      </div>
    </div>
  );
};

export default InsertBoardgame;
