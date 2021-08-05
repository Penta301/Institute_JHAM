import { useState } from "react";
import { useSpring } from "react-spring";

function Logic() {
  const [verificationPass, setVerificationPass] = useState("");
  const [showForm, setShowForm] = useState(true);
  const size = window.innerWidth;
  let [springForm, setSpringForm] = useSpring(() => {
    if (size >= 1100) {
      return {
        height: "30%",
        width: "25%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      };
    }
    return {
      height: "30%",
      width: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      flexDirection: "column",
    };
  });

  const springHandle = (event) => {
    if (event) {
      if (size >= 1100) {
        return {
          height: "30%",
          width: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        };
      } else {
        return {
          height: "30%",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          flexDirection: "column",
        };
      }
      setShowForm(true);
      return;
    }

    if (size >= 1100) {
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
    } else {
      setSpringForm(() => {
        return {
          height: "100%",
          width: "100%",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          cursor: "auto",
        };
      });
    }
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
