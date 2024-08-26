import Logo from "./Logo";
import Navbar from "./Navbar";
import ThemeController from "./ThemeController";
import ToggleSidebar from "./ToggleSidebar";

function Sidebar() {
  return (
    <div className="border body-l border-light-gray min-w-[300px] h-screen flex flex-col">
      <Logo />
      <div className=" flex-grow flex flex-col overflow-auto justify-between mt-3 mx-6 my-12">
        <Navbar />
        <div className="flex flex-col space-y-4">
          <ThemeController />
          <ToggleSidebar />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
