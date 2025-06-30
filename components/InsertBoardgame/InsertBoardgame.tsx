import { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import Cookies from "js-cookie";
import Button from "../Button/Button";
import { ToastContainer, toast } from "react-toastify";
import RangeSlider from "../RangeSlider/RangeSlider";
import { getRangeArray } from "./helper";
import { useRouter } from "next/router";

const InsertBoardgame = () => {
  const jwt = Cookies.get("user-jwt-token");

  const router = useRouter();

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
  const [canPlayPersons, setCanPlayPersons] = useState<number[]>([1, 10]);
  const [bestPlayPersons, setBestPlayPersons] = useState<number[]>([1, 10]);

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
        canPlayPersons: getRangeArray(canPlayPersons),
        bestPlayPersons: getRangeArray(bestPlayPersons),
      };

      const response = await axios.post(
        "http://localhost:3005/games/",
        boardgameBody,
        { headers: { Authorization: jwt } }
      );

      if (response.status === 200 || response.status == 201) {
        toast.success("Boardgame successfully added", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          router.push("/");
        }, 4000);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image Url"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <input
          type="number"
          placeholder="Release year"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        />
        <input
          type="number"
          placeholder="Play time"
          value={playTime}
          onChange={(e) => setPlayTime(e.target.value)}
        />
        <input
          type="number"
          placeholder="Best start to play at age"
          value={startAge}
          onChange={(e) => setStartAge(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <input
          type="number"
          placeholder="Dificulty"
          value={dificulty}
          onChange={(e) => setDificulty(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rating count"
          value={ratingCount}
          onChange={(e) => setRatingCount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Box size"
          value={boxSize}
          onChange={(e) => setBoxSize(e.target.value)}
        />

        <label className={styles.playPersonsLabel}>
          Can play persons (range)
        </label>
        <RangeSlider value={canPlayPersons} setValue={setCanPlayPersons} />

        <label className={styles.playPersonsLabel}>
          Best to play persons (range)
        </label>
        <RangeSlider value={bestPlayPersons} setValue={setBestPlayPersons} />
        <br />

        <Button title="Submit" type="DEFAULT" onClick={onSubmit} />

        <ToastContainer />
      </div>
    </div>
  );
};

export default InsertBoardgame;
