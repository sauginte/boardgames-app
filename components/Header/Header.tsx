import styles from "./styles.module.css";
import Link from "next/link";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

const Header = () => {
  const jwt = Cookie.get("user-jwt-token");
  const router = useRouter();

  const onLogout = () => {
    Cookie.remove("user-jwt-token");
    router.push("/");
  };
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Boardgame App
      </Link>
      <nav>
        <ul className={styles.meniu}>
          <li>
            <a href={"/"}>All boardgames</a>
          </li>
          <li>
            <a href={""}>Add boardgame</a>
          </li>
          {/* <li>
            {jwt ? (
              <button onClick={onLogout} className={styles.logoutBtn}>
                Logout
              </button>
            ) : (
              <a href="/login">Login</a>
            )}
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
