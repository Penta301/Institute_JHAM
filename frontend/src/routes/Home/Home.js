import React from "react";
import "./index.css";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

function Home({
  auth,
  setAuth,
  bodyUser,
  setBodyUser,
  startSession,
  createSesion,
  closeSession,
}) {
  return (
    <>
      <main className="main_content">
        <header>
          <Navbar closeSession={closeSession} auth={auth}></Navbar>
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
      <section>
        <div className="form">
          {auth ? (
            ""
          ) : (
            <Form
              auth={auth}
              setAuth={setAuth}
              bodyUser={bodyUser}
              setBodyUser={setBodyUser}
              startSession={startSession}
              createSesion={createSesion}
            ></Form>
          )}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Home;
