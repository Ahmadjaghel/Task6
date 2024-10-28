import React, { useEffect, useState } from "react";
import data from "../../../data.json";
import Blog from "./blog";
import PagesNumbers from "../PageNumbers/PageNumbers";
import SlideButton from "../PageNumbers/SlideButton";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../../redux/actions/productActions";
const AllBlogs = () => {
  const [count, setCount] = useState(1);
  let current = count;
  function moveSlider(dircition) {
    if (dircition == "next") {
      if (current !== Math.ceil(data.length / 6)) current++;
    }
    if (dircition == "prev") {
      if (current !== 1) current--;
    }
    setCount(current);
  }
  const changeslide = (ind) => {
    current = ind;
    setCount(current);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProducts(count));
  }, [count]);
  const mydata = useSelector((state) => state.allProducts.products);
  return (
    <div className="px-8 lg:px-28 pt-[30px]">
      <h4 className="font-semibold text-2xl mb-8 dark:text-white">
        All blog posts
      </h4>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-[2.223vw]">
        {mydata.map((ele, ind) => (
          <Blog key={ind} item={ele} />
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-y-5 items-center md:items-end mt-[30px] mb-[80px] md:mb-[90px] lg:mb-[60px] pt-5 border-t border-solid border-[#EAECF0] text-darkgray dark:text-[#EFEFEF]  font-medium text-sm">
        <SlideButton value="<" fun={moveSlider} />
        <div className="flex gap-[2px]">
          <PagesNumbers data={data} fun={changeslide} count={count} />
        </div>
        <SlideButton value=">" fun={moveSlider} />
      </div>
    </div>
  );
};

export default AllBlogs;
