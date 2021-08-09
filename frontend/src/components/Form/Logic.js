import { useState } from "react";

function Logic() {
  const [verificationPass, setVerificationPass] = useState("");
  // const [showForm, setShowForm] = useState(true);

  const verificaPass = (password) => {
    if (password === verificationPass) {
      return true;
    }
    alert("The password are different, insert the same");
  };

  return {
    // showForm,
    setVerificationPass,
    verificationPass,
    verificaPass,
  };
}

export default Logic;
