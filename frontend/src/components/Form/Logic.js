import { useState } from "react";
import { useSpring } from "react-spring";

function Logic() {
  const [showForm, setShowForm] = useState(true);
  let [springForm, setSpringForm] = useSpring(() => {
    return {
      height: "30%",
      width: "30%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    };
  });

  const springHandle = (true_false) => {
    if (true_false) {
      console.log("if accomplished");
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
    }
    console.log("executed");
    setSpringForm(() => {
      return {
        height: "30%",
        width: "30%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      };
    });
    setShowForm(false);
  };

  return {
    springHandle,
    springForm,
    showForm,
  };
}

export default Logic;
