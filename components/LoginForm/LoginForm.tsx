import { useState } from "react";
import styles from "./styles.module.css";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const onLogin = async () => {
    try {
      const loginBody = {
        email: email,
        password: password,
      };

      const response = await axios.post(
        "http://localhost:3005/users/login",
        loginBody
      );

      Cookies.set("user-jwt-token", response.data.jwt);
      router.push("/");
      setErrorMessage("");
    } catch (err) {
      if (err.status === 401) {
        setErrorMessage("You have provided bad data");
      }
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={onLogin}>Login</button>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </div>
      <a href="/register">New here? Register now!</a>
    </div>
  );
};

export default LoginForm;
