import React from "react";
import ToggleSidebar from "./ToggleSidebar";

function MinSidebar({ isMinimised, setIsMinimised }) {
  return (
    <div className="fixed bottom-20 left-0 mb-4 ">
      <ToggleSidebar
        isMinimised={isMinimised}
        setIsMinimised={setIsMinimised}
      />
    </div>
  );
}

export default MinSidebar;
