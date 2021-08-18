import React from "react";
import "./index.css";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";
import Logic from "./Logic";
import { motion } from "framer-motion";

function Home({
  auth,
  bodyUser,
  setBodyUser,
  createSesion,
  closeSession,
  authSuper,
}) {
  const { contentHero, ref, animation } = Logic();
  return (
    <>
      <div className="main_father_content">
        <main className="main_content">
          <header>
            <Navbar
              closeSession={closeSession}
              auth={auth}
              authSuper={authSuper}
            ></Navbar>
          </header>
          <motion.article
            className="article"
            variants={contentHero}
            initial="hidden"
            animate="visible"
          >
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
          </motion.article>
        </main>
        <section className="second_section" ref={ref}>
          <motion.article className="article" animate={animation}>
            <div className="item shadow">
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
          </motion.article>
        </section>
        <footer className="footer">
          {auth || authSuper ? (
            ""
          ) : (
            <Form
              bodyUser={bodyUser}
              setBodyUser={setBodyUser}
              createSesion={createSesion}
            ></Form>
          )}
        </footer>
      </div>
    </>
  );
}

export default Home;
