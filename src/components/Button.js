import React from "react";

function Button({ name, linkedin }) {
  function handleButton() {
    window.open(linkedin);
    console.log(linkedin);
  }

  return <button onClick={handleButton}>{name}</button>;
}

export default Button;
