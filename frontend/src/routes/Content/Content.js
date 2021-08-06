import React from "react";
import "./index.css";

function ContentShower({ img, description, title }) {
  return (
    <>
      <article className="card-info-content shadow">
        <img className="picture-perfil" src={img} alt="" />
        <div className="main-content-card">
          <div className="owner-data-card">
            <h1 className="title-card">{title}</h1>
          </div>
          <p className="descrition-card text">{description}</p>
        </div>
      </article>
    </>
  );
}

export default ContentShower;
