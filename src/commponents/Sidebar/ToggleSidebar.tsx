import { Link } from "react-router-dom";

function ToggleSidebar({ isMinimised, setIsMinimised }) {
  return (
    <>
      {isMinimised ? (
        <Link
          className="flex space-x-3 items-center justify-center bg-dark-blue w-[56px] h-[48px] rounded-r-3xl"
          onClick={() => setIsMinimised(!isMinimised)}>
          <img src="./icon-hide-sidebar.svg" alt="show-sidebar" />
        </Link>
      ) : (
        <Link
          className="flex space-x-3 items-center"
          onClick={() => setIsMinimised(!isMinimised)}>
          <img src="./icon-hide-sidebar.svg" alt="show-sidebar" />
          <p>Hide Sidebar</p>
        </Link>
      )}
    </>
  );
}

export default ToggleSidebar;
