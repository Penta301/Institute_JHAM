import React from "react";
import "./index.css";
import "animate.css";
import Logic from "./Logic";
import { animated } from "react-spring";

function Form() {
  const { springHandle, springForm, showForm } = Logic();

  return (
    <>
      <animated.div
        className="button_body shadow item"
        style={springForm}
        onClick={() => springHandle(true)}
      >
        {showForm ? (
          <button className="button_form">Conviertete en estudiante</button>
        ) : (
          <div className="content_container_form">
            <div className="inside_content_form">
              <input
                type="text"
                placeholder="nombre y apellido"
                className="text_input_form shadow text"
              />
              <input
                type="text"
                placeholder="gmail"
                className="text_input_form shadow text"
              />
              <input
                type="text"
                placeholder="contraseña"
                className="text_input_form shadow text"
              />
              <input
                type="text"
                placeholder="confirmar contraseña"
                className="text_input_form shadow text"
              />
              <input
                type="number"
                placeholder="edad"
                className="text_input_form shadow text"
              />
            </div>
            <textarea
              cols="30"
              rows="10"
              className="textarea_form text shadow"
              placeholder="Que estas interesado en aprender?"
            ></textarea>
            <button className="button_form_cancel shadow text">Cancel</button>
            <button
              className="button_form_send shadow text"
              onClick={() => {
                springHandle(false);
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