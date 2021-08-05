import { useState } from "react";

function Logic() {
  const [showContentLogo, setShowContentLogo] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return {
    showContentLogo,
    showLocation,
    showContact,
    setShowContentLogo,
    setShowLocation,
    setShowContact,
  };
}

export default Logic;
