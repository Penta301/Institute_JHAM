import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./FormLogin.css";
import Logic from "./Logic";
import ProtectedRouter from "./helpers/ProtectedRouter/ProtectedRouter";

const Home = lazy(() => import("./routes/Home/Home"));
const LogicProfile = lazy(() => import("./routes/Profile/LogicProfile"));
const LogicHigherOrderForm = lazy(() =>
  import("./components/HigherOrderForm/LogicHigherOrderForm")
);
const LogicContent = lazy(() => import("./routes/Content/LogicContent"));

function App() {
  const {
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
  } = Logic();

  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <div className="body_login">
          <ProtectedRouter
            path="/login_super_user"
            Component={LogicHigherOrderForm}
            auth={!auth}
            setAuth={setAuth}
            PropsComponent={{
              autoInputs: startSessionBody,
              setter: setStartSessionBody,
              actionCB: () => startSession(startSessionBody, "super_user/"),
            }}
          />
        </div>
        <div className="body_login">
          <ProtectedRouter
            path="/login"
            Component={LogicHigherOrderForm}
            auth={!auth}
            setAuth={setAuth}
            PropsComponent={{
              autoInputs: startSessionBody,
              setter: setStartSessionBody,
              actionCB: () => startSession(startSessionBody),
            }}
          />
        </div>
        <Route exact path="/">
          <div>
            <Home
              bodyUser={bodyUser}
              auth={auth}
              setAuth={setAuth}
              setBodyUser={setBodyUser}
              createSesion={createSesion}
              closeSession={closeSession}
            ></Home>
          </div>
        </Route>
        <Route path="/content">
          <LogicContent
            getAllCourses={getAllCourses}
            coursesData={coursesData}
            typeCourse="Materia"
          />
        </Route>
        <Route path="/profile">
          <ProtectedRouter
            path="/profile"
            Component={LogicProfile}
            auth={auth}
            setAuth={setAuth}
            PropsComponent={{ user, setUser, getUser, closeSession }}
          />
        </Route>
      </Suspense>
    </Router>
  );
}

export default App;
