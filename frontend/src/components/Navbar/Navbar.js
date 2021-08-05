import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Navbar({ auth, closeSession }) {
  return (
    <>
      <nav className="navbar_body">
        <ul className="list_father">
          <li className="link_navbar">
            <a href="#test">Cursos</a>
          </li>
          <li className="link_navbar">
            <a href="#test">Materias</a>
          </li>
          <li className="link_navbar">
            <a href="#test">Ingresos</a>
          </li>
          {auth ? (
            <Link className="link_navbar" onClick={() => closeSession()}>
              Logout
            </Link>
          ) : (
            <Link className="link_navbar" to="/login">
              Login
            </Link>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
