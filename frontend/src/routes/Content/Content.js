import React from "react";
import "./index.css";
import { motion } from "framer-motion";

function Content({ img, description, title, setter, id }) {
  return (
    <>
      <motion.article
        layoutId={id}
        className="card-info-content shadow"
        onClick={() => setter(id)}
      >
        <motion.img className="picture-perfil" src={img} alt="" />
        <motion.div className="main-content-card">
          <motion.div className="owner-data-card">
            <h1 className="title-card">{title}</h1>
          </motion.div>
          <motion.p className="descrition-card text">{description}</motion.p>
        </motion.div>
      </motion.article>
    </>
  );
}

export default Content;
