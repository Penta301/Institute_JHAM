import React from "react";
import "./index.css";
import Logic from "./Logic";
import LogicHigherOrderForm from "../HigherOrderForm/LogicHigherOrderForm";

function Form({ bodyUser, setBodyUser, createSesion }) {
  const { showForm } = Logic();

  return (
    <>
      <div className="button_body shadow item" id="expand_div">
        {showForm ? (
          <button className="button_form">Conviertete en estudiante</button>
        ) : (
          <div className="body_form_father">
            <LogicHigherOrderForm
              autoInputs={bodyUser}
              setter={setBodyUser}
              actionCB={() => createSesion(bodyUser)}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Form;
