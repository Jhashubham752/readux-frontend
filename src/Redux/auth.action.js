import axios from "axios";
import { toast } from "react-toastify";

export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8000/api/register", user)
      .then((response) => response.json())
      .then((token) => {
        localStorage.setItem("token", token.data);
        dispatch({
          type: "SIGN_UP",
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const signin = (email, password) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8000/api/login", { email, password })
      .then((token) => {
        localStorage.setItem("token", token.data);
        dispatch({
          type: "SIGN_IN",
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
