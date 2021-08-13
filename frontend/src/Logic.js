import { useState, useEffect } from "react";
import axios from "axios";

function Logic() {
  const [auth, setAuth] = useState(false);
  const [bodyUser, setBodyUser] = useState({
    name: "",
    password: "",
    age: "",
    interest: "",
    email: "",
  });
  const [startSessionBody, setStartSessionBody] = useState({
    email: "",
    password: "",
  });

  const [coursesData, setCoursesData] = useState([]);
  const [user, setUser] = useState({
    name: "",
    age: 0,
    interest: "",
    courses: [],
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

  const createSesion = async (body, setter) => {
    try {
      await api.post("/create_user/", body);
      let startSessionBody = { password: body.password, email: body.email };
      setter({
        name: "",
        password: "",
        age: "",
        interest: "",
        email: "",
      });
      startSession(startSessionBody);
    } catch (error) {
      new Error(error);
      throw Error;
    }
  };

  const startSession = async (body) => {
    try {
      const { data } = await api.post("/authentication", body);
      localStorage.setItem("token", data.jwt);
      setAuth(true);
    } catch (error) {
      new Error(error);
      throw Error;
    }
  };

  const closeSession = () => {
    localStorage.removeItem("token");
    verifySession();
  };

  const getAllCourses = async (typeCourse) => {
    try {
      const { data } = await api.get(`get_all_courses/${typeCourse}`);
      setCoursesData(data);
    } catch (error) {
      new Error(error);
      throw Error;
    }
  };

  const getUser = async (setter) => {
    try {
      const { data } = await api.get("get_user/");
      setter(data[0]);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    auth,
    setAuth,
    bodyUser,
    setBodyUser,
    startSession,
    createSesion,
    closeSession,
    startSessionBody,
    setStartSessionBody,
    getAllCourses,
    coursesData,
    user,
    setUser,
    getUser,
  };
}

export default Logic;
