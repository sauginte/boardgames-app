import styles from "./styles.module.css";
import Header from "../Header/Header";

const PageNotExist = () => {
  return (
    <div>
      <Header />
      <div className={styles.imgWrapper}>
        <img
          src="https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk="
          alt=""
        />
      </div>
    </div>
  );
};

export default PageNotExist;
