import React from "react";
import "./index.css";
import "animate.css";
import Logic from "./Logic";
import { animated } from "react-spring";

function Form({
  startSession,
  bodyUser,
  setBodyUser,
  auth,
  createSesion,
  login,
}) {
  const {
    springHandle,
    springForm,
    showForm,
    verificationPass,
    setVerificationPass,
    verificaPass,
  } = Logic();

  return (
    <>
      <animated.div
        className="button_body shadow item"
        id="expand_div"
        style={springForm}
      >
        {showForm ? (
          <button className="button_form" onClick={() => springHandle()}>
            Conviertete en estudiante
          </button>
        ) : (
          <div className="content_container_form">
            <div className="inside_content_form">
              <input
                type="text"
                placeholder="nombre y apellido"
                className="text_input_form shadow text"
                value={bodyUser.name}
                onChange={(e) => {
                  setBodyUser({ ...bodyUser, name: e.currentTarget.value });
                }}
              />
              <input
                type="text"
                placeholder="contraseña"
                className="text_input_form shadow text"
                value={bodyUser.password}
                onChange={(e) => {
                  setBodyUser({ ...bodyUser, password: e.currentTarget.value });
                }}
              />
              <input
                type="text"
                placeholder="gmail"
                className="text_input_form shadow text"
                value={bodyUser.email}
                onChange={(e) => {
                  setBodyUser({ ...bodyUser, email: e.currentTarget.value });
                }}
              />
              <input
                type="text"
                placeholder="confirmar contraseña"
                className="text_input_form shadow text"
                value={verificationPass}
                onChange={(e) => {
                  setVerificationPass(e.currentTarget.value);
                }}
              />
              <input
                type="number"
                placeholder="edad"
                className="text_input_form shadow text"
                value={bodyUser.age}
                onChange={(e) =>
                  setBodyUser({ ...bodyUser, age: e.currentTarget.value })
                }
              />
            </div>
            <textarea
              cols="30"
              rows="10"
              className="textarea_form text shadow"
              placeholder="Que estas interesado en aprender?"
              value={bodyUser.interest}
              onChange={(e) =>
                setBodyUser({ ...bodyUser, interest: e.currentTarget.value })
              }
            ></textarea>
            <button
              className="button_form_cancel shadow text"
              id="cancel_button"
              onClick={() => {
                springHandle(true);
              }}
            >
              Cancel
            </button>
            <button
              className="button_form_send shadow text"
              onClick={() => {
                createSesion(bodyUser);
              }}
            >
              Send
            </button>
          </div>
        )}
      </animated.div>
    </>
  );
}

export default Form;
