import { useState, useEffect } from "react";
import axios from "axios";

function LogicPayment({ baseUrl, title, price }) {
  const [getState, setGetState] = useState(false);
  const [preference, setPreference] = useState(false);

  const api = axios.create({
    baseURL: baseUrl,
  });

  const payCourse = async (setter, title, price) => {
    try {
      const { data } = await api.post(`pay_course/${title}/${price}`);
      setter(data.mercado_pago_response);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    if (getState === true) {
      payCourse(setPreference, title, price);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getState]);

  useEffect(() => {
    if (preference !== false) {
      console.log(preference);
      window.Mercadopago.setPublishableKey(
        "TEST-f32b57db-5d48-445d-b9f0-84b8609f20d9"
      );
      createCheckoutButton(preference.id);
    }
  }, [preference]);

  function createCheckoutButton(preference) {
    let script = document.createElement("script");

    script.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.type = "text/javascript";
    script.dataset.preferenceId = preference;
    document.getElementById("button-checkout").innerHTML = "";
    document.querySelector("#button-checkout").appendChild(script);
  }

  return (
    <>
      {preference ? (
        <div className="button-checkout" id="button-checkout"></div>
      ) : (
        <button onClick={() => setGetState(true)}>Pagar</button>
      )}
    </>
  );
}

export default LogicPayment;
