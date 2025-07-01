import axios from "axios";
import { config } from "../config";

type LoginProps = {
  email: string;
  password: string;
};

export const loginUser = async ({ email, password }: LoginProps) => {
  try {
    const loginBody = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${config.BASE_URL}/users/login`,
      loginBody
    );

    return response;
  } catch (err) {
    throw err;
  }
};
