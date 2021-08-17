import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./FormLogin.css";
import Logic from "./Logic";
import ProtectedRouter from "./helpers/ProtectedRouter/ProtectedRouter";

const AdminPanel = lazy(() => import("./routes/AdminPanel/AdminPanel"));
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
    authSuper,
    bodyUser,
    superBodyUser,
    setAuthSuper,
    setSuperBodyUser,
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
    course,
    setCourse,
    createCourses,
  } = Logic();

  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <div className="body_login">
          <Route path="/login_super_user">
            <LogicHigherOrderForm
              autoInputs={startSessionBody}
              setter={setStartSessionBody}
              actionCB={() => {
                startSession(
                  { ...startSessionBody, name: startSessionBody.email },
                  "authentication/super_user/"
                );
              }}
            ></LogicHigherOrderForm>
          </Route>
          <Route path="/register_super_user">
            <LogicHigherOrderForm
              autoInputs={superBodyUser}
              setter={setSuperBodyUser}
              actionCB={() =>
                createSesion(
                  superBodyUser,
                  setSuperBodyUser,
                  `super_user/${superBodyUser.superPassword}`,
                  false
                )
              }
            ></LogicHigherOrderForm>
          </Route>
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
              authSuper={authSuper}
            ></Home>
          </div>
        </Route>
        <Route path="/courses">
          <LogicContent
            getAllCourses={getAllCourses}
            coursesData={coursesData}
            typeCourse="Curso"
          />
        </Route>
        <Route path="/subjects">
          <LogicContent
            getAllCourses={getAllCourses}
            coursesData={coursesData}
            typeCourse="Materia"
          />
        </Route>
        <Route path="/income">
          <LogicContent
            getAllCourses={getAllCourses}
            coursesData={coursesData}
            typeCourse="Ingreso"
          />
        </Route>
        <ProtectedRouter
          path="/profile"
          Component={LogicProfile}
          auth={auth}
          setAuth={setAuth}
          PropsComponent={{ user, setUser, getUser, closeSession }}
        />
        <ProtectedRouter
          path="/admin_panel"
          Component={AdminPanel}
          auth={authSuper}
          setAuth={setAuthSuper}
          PropsComponent={{ closeSession, course, setCourse, createCourses }}
        />
      </Suspense>
    </Router>
  );
}

export default App;
