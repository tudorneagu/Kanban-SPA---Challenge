import Navbar from "./Navbar";
import ThemeController from "./ThemeController";
import ToggleSidebar from "./ToggleSidebar";
import Logo from "./Logo";

function Sidebar({ isMinimised, setIsMinimised, setDarkTheme, darkTheme }) {
  return (
    <div className="border-r body-l border-light-gray w-[300px] flex flex-col h-full pb-8 dark:bg-gray-500 dark:border-gray-400">
      <div className=" flex items-center h-[100px]">
        <Logo />
      </div>
      <div className="flex-grow flex flex-col overflow-auto justify-between mt-3 mx-6 my-12">
        <Navbar />
        <div className="flex flex-col space-y-4">
          <ThemeController darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <ToggleSidebar
            isMinimised={isMinimised}
            setIsMinimised={setIsMinimised}
            darkTheme={darkTheme}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
