import ToggleSwitch from "../Buttons/ToggleSwitch";

function ThemeController({ setDarkTheme, darkTheme }) {
  return (
    <div className="bg-light-gray rounded-lg h-12 flex items-center justify-center space-x-4  dark:bg-gray-600">
      <img src="./icon-light-theme.svg" alt="icon dark theme" />
      <ToggleSwitch darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <img src="./icon-dark-theme.svg" alt="icon dark theme" />
    </div>
  );
}

export default ThemeController;
