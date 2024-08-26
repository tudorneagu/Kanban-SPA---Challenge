import Button from "../Buttons/Button";
import Logo from "../Sidebar/Logo";

function Header({ isMinimised }) {
  return (
    <div className="flex justify-between border-b border-light-gray w-full h-[100px] items-center py-7 pr-7 ">
      {isMinimised ? (
        <div className="flex items-center">
          <div className="border-r border-light-gray bottom-1 flex items-center h-[100px]">
            <Logo />
          </div>
          <h1 className=" heading-xl pl-8">Platform Launch</h1>{" "}
        </div>
      ) : (
        <h1 className=" heading-xl pl-8 ">Platform Launch</h1>
      )}
      <Button>+ Add New Task</Button>
    </div>
  );
}

export default Header;
