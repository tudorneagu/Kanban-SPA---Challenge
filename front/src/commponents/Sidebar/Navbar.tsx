import { NavLink, Link } from "react-router-dom";

function Navbar({ darkTheme }) {
  return (
    <div>
      <p className="dark:text-white">All boards (X)</p>
      <ul>
        <li>
          <NavLink className=" bg-dark-blue">
            <div className="flex  h-12 items-center">
              <img src="./icon-board.svg" alt="icon board" />
              <p className="ml-4 dark:text-white ">Platform Launch</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <div className="flex  h-12 items-center">
              <img src="./icon-board.svg" alt="icon board" />
              <p className="ml-4 dark:text-white ">Platform Launch</p>
            </div>
          </NavLink>
        </li>
        <li>
          <Link>
            <div className="flex h-12 items-center">
              <img src="./icon-board.svg" alt="icon board" />
              <p className="ml-4 text-blue-200">+ Create New Board</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
