import Button from "../Buttons/Button";

function Header() {
  return (
    <div className="flex justify-between border-b border-light-gray w-full h-[100px] items-center p-7 t ">
      <h1 className=" heading-xl ">Platform Launch</h1>
      <Button>+ Add New Task</Button>
    </div>
  );
}

export default Header;
