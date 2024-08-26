function Button({ children }) {
  return (
    <div className="flex items-center">
      <button
        className="bg-dark-blue heading-m !text-white  h-12 rounded-3xl p-4 flex items-center mr-6"
        style={{ color: "white" }}>
        {children}
      </button>
      <img src="./icon-vertical-ellipsis.svg" alt="button" />
    </div>
  );
}

export default Button;
