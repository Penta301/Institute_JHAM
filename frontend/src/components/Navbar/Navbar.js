import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Logic from "./Logic";
import { motion } from "framer-motion";

function Navbar({ auth, closeSession, authSuper }) {
  const { container, item, itemTitle } = Logic();

  return (
    <>
      <motion.nav
        className="navbar_body"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <ul className="list_father">
          <motion.li className="link_navbar" variants={item}>
            <Link to="/courses">Cursos</Link>
          </motion.li>
          <motion.li className="link_navbar" variants={item}>
            <Link to="/subjects">Materias</Link>
          </motion.li>
          <motion.li className="link_navbar" variants={itemTitle}>
            <h1 className="title_header">Instituto JHAM</h1>
          </motion.li>
          <motion.li className="link_navbar" variants={item}>
            <Link to="/income">Ingresos</Link>
          </motion.li>
          <motion.li className="link_navbar" variants={item}>
            {auth ? (
              <Link to="/profile">Profile</Link>
            ) : authSuper ? (
              <Link to="/admin_panel">Admin Panel</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </motion.li>
        </ul>
      </motion.nav>
    </>
  );
}

export default Navbar;
