import { useState, useEffect } from "react";

function ToggleSwitch({ setDarkTheme, darkTheme }) {
  useEffect(() => {
    localStorage.setItem("darkTheme", darkTheme);
  }, [darkTheme]);
  return (
    <button
      className={`toggle-btn ${darkTheme ? "active" : ""}`}
      onClick={() => setDarkTheme(!darkTheme)}>
      <div className="toggle-knob" />
    </button>
  );
}

export default ToggleSwitch;
