import { useHistory } from "react-router-dom";

function HigherOrderForm({
  iterateInputs,
  setter,
  actionCB,
  autoInputs,
  manualInputs,
  cancelCB,
}) {
  const history = useHistory();

  return (
    <div>
      <div>{iterateInputs(autoInputs, setter)}</div>
      {manualInputs}
      <div className="button_container">
        {cancelCB ? (
          <button
            className="button_form_cancel shadow text"
            onClick={() => cancelCB()}
          >
            Cancel
          </button>
        ) : (
          <button
            className="button_form_cancel shadow text"
            onClick={() => history.push("/")}
          >
            Cancel
          </button>
        )}
        <button
          className="button_form_send shadow text"
          onClick={() => {
            actionCB();
            history.push("/");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default HigherOrderForm;
