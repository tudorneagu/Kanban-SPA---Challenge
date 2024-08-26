import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./commponents/Header/Header";
import SideBar from "./commponents/Sidebar/Sidebar";
import MinSidebar from "./commponents/Sidebar/MinSidebar";

function App() {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("darkTheme");
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    } else return false;
  };

  const [isMinimised, setIsMinimised] = useState(false);
  const [darkTheme, setDarkTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);
  return (
    <BrowserRouter>
      <div className={!darkTheme ? "flex  h-screen" : "flex  h-screen"}>
        {!isMinimised ? (
          <SideBar
            isMinimised={isMinimised}
            setIsMinimised={setIsMinimised}
            darkTheme={darkTheme}
            setDarkTheme={setDarkTheme}
          />
        ) : (
          <MinSidebar
            isMinimised={isMinimised}
            setIsMinimised={setIsMinimised}
          />
        )}{" "}
        <Header isMinimised={isMinimised} />
        <div className="dark:bg-gray-600 flex h-screen">
          <Routes>
            <Route to="/" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
