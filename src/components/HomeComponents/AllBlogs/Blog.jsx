import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectedProduct } from "../../../redux/actions/productActions";

const Blog = ({ item }) => {
  const color = ["text-ultraPink", "text-govern", "text-magPink"];
  const bg = ["bg-blurmagent", "bg-balBlue", "bg-magenta"];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goBlog = () => {
    navigate(`/blog/${item.id}`);
    dispatch(selectedProduct(item.id));
  };
  return (
    // <Link to={`/blog/${item.id}`}>
    <div className=" flex flex-col  gap-8 " onClick={goBlog}>
      <img
        src={item.imag}
        alt="photo...."
        className="w-full h-[61.539vw] md:h-[28.777vw] lg:h-[16.667vw]"
      />
      <div>
        <p className="text-ultraPink font-semibold text-sm mb-3">{item.date}</p>

        <div className="flex justify-between">
          <p className="font-semibold text-2xl mb-3 dark:text-white">
            {item.title}
          </p>
          <FiArrowUpRight size={28} className="dark:text-white" />
        </div>
        <p className="font-normal text-base text-darkgray dark:text-lightgray mb-6">
          {item.des.split(".", 1)}
        </p>
        <div className="flex flex-row flex-wrap gap-2">
          {item.config.map((ele, ind) => (
            <span
              key={ind}
              className={`${color[ind]} ${bg[ind]} font-medium text-sm px-[10px] py-[2px] rounded-xl `}
            >
              {ele}
            </span>
          ))}
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default Blog;
