import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
const SlideButton = ({ value, fun }) => {
  const myfun = () => {
    if (value == "<") fun("prev");
    else if (value == ">") fun("next");
  };
  return (
    <>
      {value == "<" ? (
        <button
          className=" flex justify-center items-center cursor-pointer gap-2 "
          onClick={myfun}
        >
          <IoArrowBackOutline size={20} />
          <span>Previous</span>
        </button>
      ) : (
        <button
          className="flex justify-center items-center cursor-pointer gap-2 "
          onClick={myfun}
        >
          <span>Next</span>
          <IoArrowForwardOutline size={20} />
        </button>
      )}
    </>
  );
};

export default SlideButton;
