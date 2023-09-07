import axios from "axios";
import { API_BASE_URL } from "../config";
import { AuthType } from "../types/user";

export const userLoginApi = async (user: AuthType) => {
    console.log(user,"userr")
    try {
      const { data } = await axios.post(API_BASE_URL + "/Account/login", user);
      return data;
    } catch (error) {
      throw new Error("Server Error");
    }
  };