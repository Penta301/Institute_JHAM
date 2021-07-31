import { useState } from "react";
import { useSpring } from "react-spring";

function Logic() {
  const [verificationPass, setVerificationPass] = useState("");
  const [showForm, setShowForm] = useState(true);
  let [springForm, setSpringForm] = useSpring(() => {
    return {
      height: "30%",
      width: "25%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    };
  });

  const springHandle = (event) => {
    if (event) {
      setSpringForm(() => {
        return {
          height: "30%",
          width: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        };
      });
      setShowForm(true);
      return;
    }

    setSpringForm(() => {
      return {
        height: "100%",
        width: "100%",
        padding: "10px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        cursor: "auto",
      };
    });
    setShowForm(false);
    return;
  };

  const verificaPass = (password) => {
    if (password === verificationPass) {
      return true;
    }
    alert("The password are different, insert the same");
  };

  return {
    springHandle,
    springForm,
    showForm,
    setVerificationPass,
    verificationPass,
    verificaPass,
  };
}

export default Logic;
