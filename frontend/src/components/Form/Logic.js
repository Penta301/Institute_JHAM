import { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";

function Logic() {
  const [showForm, setShowForm] = useState(true);
  const animation = useAnimation();

  useEffect(() => {
    if (!showForm) {
      if (window.innerWidth >= 1100) {
        animation.start({
          width: "90%",
          height: 200,
          transition: {
            type: "spring",
            duration: 1,
            bounce: 0.3,
          },
        });
        return;
      }
      console.log("test");
      animation.start({
        width: "95%",
        height: "100%",
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    } else if (showForm) {
      animation.start({
        width: "auto",
        height: "auto",
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showForm]);

  return {
    showForm,
    animation,
    setShowForm,
  };
}

export default Logic;
