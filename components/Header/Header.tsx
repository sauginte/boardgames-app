import styles from "./styles.module.css";
import Link from "next/link";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import burgerBtn from "../../assets/img/burger-menu.svg";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  const [isShowMobileMenu, setShoeMobileMenu] = useState(false);
  const jwt = Cookie.get("user-jwt-token");
  const router = useRouter();

  const onLogout = () => {
    Cookie.remove("user-jwt-token");
    router.push("/");
  };

  return (
    <>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Boardgame App
        </Link>
        <NavBar jwt={jwt!} onClick={onLogout} />
        <button
          className={styles.burgerBtn}
          onClick={() => setShoeMobileMenu((prevState) => !prevState)}
        >
          <img src={burgerBtn.src} alt="" />
        </button>
      </div>

      {isShowMobileMenu && (
        <div className={styles.overlay}>
          <NavBar jwt={jwt!} onClick={onLogout} />
        </div>
      )}
    </>
  );
};

export default Header;
