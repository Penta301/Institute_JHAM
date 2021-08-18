import { useEffect } from "react";

function LogicPayment({ response_id }) {
  useEffect(() => {
    window.Mercadopago.setPublishableKey(
      "TEST-f32b57db-5d48-445d-b9f0-84b8609f20d9"
    );
    console.log(response_id);
    createCheckoutButton(response_id);
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
      <div className="button-checkout" id="button-checkout"></div>
    </>
  );
}

export default LogicPayment;
