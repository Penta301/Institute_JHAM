import React from "react";
import "./index.css";
import "animate.css";
import Logic from "./Logic";
import { animated } from "react-spring";
import LogicHigherOrderForm from "../HigherOrderForm/LogicHigherOrderForm";

function Form({ bodyUser, setBodyUser, createSesion }) {
  const { springHandle, springForm, showForm } = Logic();

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
          <LogicHigherOrderForm
            autoInputs={bodyUser}
            setter={setBodyUser}
            actionCB={() => createSesion(bodyUser)}
            cancelCB={() => springHandle(true)}
          />
        )}
      </animated.div>
    </>
  );
}

export default Form;
