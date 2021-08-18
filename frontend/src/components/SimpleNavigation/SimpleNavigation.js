import "./index.css";
import { useHistory } from "react-router-dom";
function SimpleNavigation({ Cb }) {
  const history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <nav className="navigation shadow">
        <button
          className="button_cancel text shadow"
          onClick={() => {
            Cb();
            history.push("/");
          }}
        >
          Logout
        </button>
        <button
          className="button_send text shadow"
          onClick={() => {
            history.push("/");
          }}
        >
          Home
        </button>
      </nav>
    </div>
  );
}

export default SimpleNavigation;
