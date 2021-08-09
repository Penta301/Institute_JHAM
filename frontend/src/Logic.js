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
  const [startSessionBody, setStartSessionBody] = useState({
    email: "",
    password: "",
  });
  const [coursesData, setCoursesData] = useState([]);

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
      api.post("/create_user/", body);
      let startSessionBody = { password: body.password, email: body.email };
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
      console.log(data);
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
  };
}

export default Logic;
