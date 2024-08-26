import { Link } from "react-router-dom";

function ToggleSidebar() {
  return (
    <Link className="flex space-x-3 items-center ">
      <img src="./icon-hide-sidebar.svg" alt="show-sidebar" />
      <p>Hide Sidebar</p>
    </Link>
  );
}

export default ToggleSidebar;
