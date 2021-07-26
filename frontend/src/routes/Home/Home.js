import React from "react";
import "./index.css";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";

function Home() {
  return (
    <>
      <main className="main_content">
        <header>
          <Navbar></Navbar>
        </header>
        <div className="title_container">
          <h1 className="title_header">Instituto JHAM</h1>
        </div>
        <article className="article">
          <p className="text shadow item article_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            corporis, quis totam voluptate mollitia nulla quasi quidem iusto
            quaerat sint accusamus assumenda consequatur officia iure natus
            reprehenderit molestiae facilis qui?
          </p>
          <img
            className="shadow item image"
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
            alt="school"
          />
        </article>
      </main>
      <section className="second_section">
        <article className="article">
          <div className="item shadow">
            <h2 className="logo_title">LOGO</h2>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              consequuntur adipisci delectus repudiandae dignissimos corporis
              blanditiis optio expedita perferendis quod, sed sunt. A nisi
              eligendi doloremque non culpa sequi animi?
            </p>
          </div>
          <img
            className="shadow item image"
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
            alt="school"
          />
        </article>
      </section>
      <section className="third_section">
        <div className="form">
          <Form></Form>
        </div>
        <footer className="item shadow footer">
          <article>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              at? Mollitia dolor aliquam totam nulla ea distinctio autem non
              dolores reiciendis sit quos et tempora aspernatur laudantium, ab
              tempore commodi.
            </p>
          </article>
          <div>
            <ul className="footer_info">
              <li>
                <a href="#test">Desarrollador</a>
              </li>
              <li>
                <a href="#test">Ubicacion</a>
              </li>
              <li>
                <a href="#test">2657-638252</a>
              </li>
            </ul>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Home;
