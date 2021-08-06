import "./App.css";
import Home from "./routes/Home/Home";
import Logic from "./Logic";
import Content from "./routes/Content/Content";
import FullContent from "./routes/FullContent/FullContent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LogicHigherOrderForm from "./components/HigherOrderForm/LogicHigherOrderForm";
import "./FormLogin.css";

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
  } = Logic();

  return (
    <Router>
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
          {/* <Content /> */}
          {/* <FullContent /> */}
        </div>
      </Route>
      <Route path="/content-course"></Route>
      <Route path="/login">
        <div className="body_login">
          <LogicHigherOrderForm
            autoInputs={startSessionBody}
            setter={setStartSessionBody}
            actionCB={() => startSession(startSessionBody)}
          />
        </div>
      </Route>
    </Router>
  );
}

export default App;
