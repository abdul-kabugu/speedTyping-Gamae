import { useState } from "react";

function useToggler(bydefault) {
  const [isToggleOn, setToggle] = useState(bydefault);

  function toggleOn() {
    setToggle((prev) => !prev);
  }

  return [isToggleOn, toggleOn];
}
export default useToggler;
