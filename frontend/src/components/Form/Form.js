import React from "react";
import "./index.css";
import Logic from "./Logic";
import LogicHigherOrderForm from "../HigherOrderForm/LogicHigherOrderForm";
import { motion } from "framer-motion";

function Form({ bodyUser, setBodyUser, createSesion }) {
  const { showForm, animation, setShowForm } = Logic();

  return (
    <>
      <div className="container_father_form">
        <motion.div
          className="button_body shadow item"
          animate={animation}
          initial={{ width: "30%" }}
        >
          {showForm ? (
            <button className="button_form" onClick={() => setShowForm(false)}>
              Conviertete en estudiante
            </button>
          ) : (
            <div className="body_form_father">
              <LogicHigherOrderForm
                autoInputs={bodyUser}
                setter={setBodyUser}
                actionCB={() => {
                  createSesion(bodyUser, setBodyUser);
                  setShowForm(false);
                }}
                cancelCB={() => setShowForm(true)}
              />
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
}

export default Form;
