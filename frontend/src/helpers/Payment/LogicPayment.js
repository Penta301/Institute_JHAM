import { useEffect } from "react";
import axios from "axios";

function LogicPayment({ response_id, title }) {
  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
  });

  const addCourse = async (title) => {
    try {
      await api.put(`/add_course/${title}`);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    window.Mercadopago.setPublishableKey(
      "TEST-f32b57db-5d48-445d-b9f0-84b8609f20d9"
    );
    createCheckoutButton(response_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response_id]);

  function createCheckoutButton(response) {
    let script = document.createElement("script");

    script.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.type = "text/javascript";
    script.dataset.preferenceId = response;
    document.getElementById("button-checkout").innerHTML = "";
    document.querySelector("#button-checkout").appendChild(script);
  }

  return (
    <>
      <div
        className="button-checkout"
        id="button-checkout"
        onClick={() => addCourse(title)}
      ></div>
    </>
  );
}

export default LogicPayment;
