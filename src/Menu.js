import React from "react";
import useToggler from "./useToggler";

function menu() {
  const [on, toggle] = useToggler(true);
  return (
    <div>
      <button on onClick={toggle}>
        {on ? "hide menu" : "show menu"}{" "}
      </button>
      <nav style={{ display: on ? "block" : "none" }}>
        <p>users</p>
        <p>buyers</p>
        <p>sellers</p>
        <p>vendors </p>
      </nav>
    </div>
  );
}
export default menu;
