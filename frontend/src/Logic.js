import { useState, useEffect } from "react";
import axios from "axios";

function Logic() {
  const [auth, setAuth] = useState(undefined);
  const [bodyUser, setBodyUser] = useState({
    name: "",
    password: "",
    age: "",
    interest: "",
    email: "",
  });

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;

  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
  });

  const verifySession = () => {
    if (localStorage.getItem("token")) {
      setAuth(true);
      return;
    }
    setAuth(undefined);
  };

  useEffect(() => {
    verifySession();
  }, []);

  const createSesion = async (body) => {
    try {
      const { data } = api.post("/create_user/", body);
      let startSessionBody = { password: body.password, name: body.name };
      startSession(startSessionBody);
    } catch (error) {
      throw new Error(error);
    }
  };

  const startSession = async (body) => {
    try {
      const { data } = await api.post("/authentication", body);
      localStorage.setItem("token", data.jwt);
      console.log(data);
      setAuth(true);
    } catch (error) {
      throw new Error(error);
    }
  };

  const closeSession = () => {
    localStorage.removeItem("token");
    verifySession();
  };

  return { auth, setAuth, bodyUser, setBodyUser, startSession, createSesion };
}

export default Logic;
