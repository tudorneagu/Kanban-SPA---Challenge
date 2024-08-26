function Button({ children }) {
  return (
    <div className="flex items-center">
      <button className="bg-blue-200 heading-m !text-white  h-12 rounded-3xl p-4 flex items-center mr-6">
        {children}
      </button>
      <img src="./icon-vertical-ellipsis.svg" alt="button" />
    </div>
  );
}

export default Button;
