import { useState } from "react";

function ToggleSwitch() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={`toggle-btn ${isActive ? "active" : ""}`}
      onClick={() => {
        setIsActive(!isActive);
      }}>
      <div className="toggle-knob" />
    </button>
  );
}

export default ToggleSwitch;
