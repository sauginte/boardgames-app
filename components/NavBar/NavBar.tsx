import styles from "./styles.module.css";
import Link from "next/link";

type NavBarProps = {
  jwt: string;
  onClick: () => void;
};

const NavBar = ({ jwt, onClick }: NavBarProps) => {
  return (
    <nav>
      <ul className={styles.meniu}>
        <li>
          <Link href={"/"}>All boardgames</Link>
        </li>
        <li>
          <Link href={"/insert"}>Add boardgame</Link>
        </li>
        <li>
          {jwt ? (
            <button onClick={onClick} className={styles.logoutBtn}>
              Logout
            </button>
          ) : (
            <a href="/login">Login</a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
