const PageNumber = ({ value, fun, count, length }) => {
  const myfun = () => {
    if (value == "<") fun("prev");
    else if (value == ">") fun("next");
    else fun(value);
  };
  return (
    <>
      {value == count ? (
        <button
          className="w-10 h-10 rounded-lg  flex justify-center items-center cursor-pointer transition-all bg-brightPink text-soft dark:text-black"
          onClick={myfun}
        >
          {value}
        </button>
      ) : value == 1 ||
        value == count + 1 ||
        value == length ||
        value == count - 1 ? (
        <button
          className="w-10 h-10 rounded-lg  flex justify-center items-center cursor-pointer transition-all"
          onClick={myfun}
        >
          {value}
        </button>
      ) : (
        <button
          onClick={myfun}
          className="w-10 h-10 rounded-lg  flex justify-center items-center cursor-pointer transition-all"
        >
          .
        </button>
      )}
    </>
  );
};

export default PageNumber;
