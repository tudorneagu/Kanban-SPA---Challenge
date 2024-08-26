import ToggleSwitch from "../Buttons/ToggleSwitch";

function ThemeController() {
  return (
    <div className="bg-light-gray rounded-md h-12 flex items-center justify-center space-x-4">
      <img src="./icon-light-theme.svg" alt="icon dark theme" />
      <ToggleSwitch />
      <img src="./icon-dark-theme.svg" alt="icon dark theme" />
    </div>
  );
}

export default ThemeController;
