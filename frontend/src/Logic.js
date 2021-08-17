import { useState, useEffect } from "react";
import axios from "axios";

function Logic() {
  const [auth, setAuth] = useState(false);
  const [authSuper, setAuthSuper] = useState(false);
  const [bodyUser, setBodyUser] = useState({
    name: "",
    password: "",
    age: "",
    interest: "",
    email: "",
  });

  const [superBodyUser, setSuperBodyUser] = useState({
    email: "",
    name: "",
    password: "",
    superPassword: "",
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
  const [course, setCourse] = useState({
    type_course: "Materia",
    title: "",
    content_school: "",
    content_university: "",
    general_description: "",
    owner: "",
    img: "",
    category: "",
    price: "",
  });

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;

  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
  });

  const verifySession = () => {
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("super_token")) {
        setAuthSuper(true);
        return;
      }
      setAuth(true);
      return;
    }
    setAuth(undefined);
    setAuthSuper(undefined);
  };

  useEffect(() => {
    verifySession();
  }, []);

  const createSesion = async (
    body,
    setter,
    route = "/create_user/",
    startSessionEval = true
  ) => {
    try {
      await api.post(route, body);
      setter({
        name: "",
        password: "",
        age: "",
        interest: "",
        email: "",
      });
      if (startSessionEval) {
        startSession({ ...startSessionBody });
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const startSession = async (body, route = "/authentication") => {
    try {
      const { data } = await api.post(route, body);
      localStorage.setItem("token", data.jwt);
      if (data.auth) {
        setAuthSuper(true);
        localStorage.setItem("super_token", data.auth);
        return;
      }
      setAuth(true);
    } catch (error) {
      throw new Error(error);
    }
  };

  const closeSession = () => {
    localStorage.clear();
    verifySession();
  };

  const createCourses = async (body, setter) => {
    try {
      api.post("/create_course/", body);
      setter({
        type_course: "Materia",
        title: "",
        content_school: "",
        content_university: "",
        general_description: "",
        owner: "",
        img: "",
        category: "",
        price: "",
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  const getAllCourses = async (typeCourse) => {
    try {
      const { data } = await api.get(`get_all_courses/${typeCourse}`);
      setCoursesData(data);
    } catch (error) {
      throw new Error(error);
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
    authSuper,
    setAuthSuper,
    bodyUser,
    setBodyUser,
    superBodyUser,
    setSuperBodyUser,
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
    course,
    setCourse,
    createCourses,
  };
}

export default Logic;
