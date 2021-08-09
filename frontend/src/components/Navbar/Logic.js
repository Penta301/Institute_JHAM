function Logic() {
  const container = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 2.5,
        delayChildren: 0.3,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const itemTitle = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 3,
        type: "spring",
      },
    },
  };

  return { container, item, itemTitle };
}

export default Logic;
