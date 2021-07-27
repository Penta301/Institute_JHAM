import { useState } from "react";
import { useSpring } from "react-spring";

function Logic() {
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

  return {
    springHandle,
    springForm,
    showForm,
  };
}

export default Logic;
