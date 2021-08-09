import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

function Logic() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const contentHero = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 5,
        duration: 2,
        animation: "easeInOut",
      },
    },
  };

  return { contentHero, ref, animation };
}

export default Logic;
