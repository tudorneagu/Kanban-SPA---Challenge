import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./commponents/Header/Header";
import SideBar from "./commponents/Sidebar/Sidebar";
import MinSidebar from "./commponents/Sidebar/MinSidebar";

function App() {
  const [isMinimised, setIsMinimised] = useState(false);
  console.log(isMinimised);
  return (
    <BrowserRouter>
      <div className="flex  h-screen">
        {!isMinimised ? (
          <SideBar isMinimised={isMinimised} setIsMinimised={setIsMinimised} />
        ) : (
          <MinSidebar
            isMinimised={isMinimised}
            setIsMinimised={setIsMinimised}
          />
        )}{" "}
        <Header isMinimised={isMinimised} />
        <div className="bg-mid-gray">
          <Routes>
            <Route to="/" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
