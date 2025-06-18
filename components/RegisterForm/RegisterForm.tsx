import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import styles from "./styles.module.css";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const onRegister = async () => {
    if (!firstName || !email || !password) {
      setErrorMessage("All fields are required");
      return;
    }
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(email)) {
      setErrorMessage("Provided email is not valid");
    }
    try {
      const registerBody = {
        firstName: firstName,
        email: email,
        password: password,
      };

      const response = await axios.post(
        "http://localhost:3005/users",
        registerBody
      );

      console.log(Cookies.set("user-jwt-token", response.data.jwt));
      router.push("/main");
      setErrorMessage("");
    } catch (err) {
      if (err.status === 409) {
        setErrorMessage("This user already exists");
      }
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
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
        <button onClick={onRegister}>Register</button>
      </div>
      <a href="/login">Already have account? Login!</a>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export default RegisterForm;
