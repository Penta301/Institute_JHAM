import "./App.css";
import Home from "./routes/Home/Home";
import ProtectedRouter from "./helpers/ProtectedRouter/ProtectedRouter";
import Logic from "./Logic";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./components/Form/Form";

function App() {
  const { auth, setAuth, bodyUser, setBodyUser, startSession, createSesion } =
    Logic();

  return (
    <Router>
      <div>
        <Home
          bodyUser={bodyUser}
          auth={auth}
          setAuth={setAuth}
          setBodyUser={setBodyUser}
          startSession={startSession}
          createSesion={createSesion}
        ></Home>
      </div>
      <ProtectedRouter
        path="/login"
        auth={auth}
        Component={Form}
        PropsComponent={{
          startSession: startSession,
          bodyUser: bodyUser,
          setBodyUser: setBodyUser,
          auth: auth,
          createSesion: createSesion,
          login: true,
        }}
      />
    </Router>
  );
}

export default App;
