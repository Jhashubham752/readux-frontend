import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../Redux/auth.action";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const SignUp = () => {
  const [user, setUser] = useState({
    photo: "",
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
    formData: new FormData(),
  });
  const { photo, formData, name, email, password, error, success } = user;

  const handleChange = (name = (event) => {
    const value = name === "photo" ? event.target.file[0] : event.target.value;
    formData.set(name, value);
    console.log(value);
    setUser({ ...user, [name]: value });
  });

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    history.push("/login");
    setUser({
      photo: "",
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <div class="login">
      <h1> Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="photo"
          value={user.photo}
          onChange={handleChange(photo)}
        />

        <input
          type="text"
          name="name"
          placeholder="Username"
          value={user.username}
          onChange={handleChange(name)}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange(email)}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange(password)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignUp;
