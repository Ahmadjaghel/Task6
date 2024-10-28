import React from "react";
import Subscribe from "../components/blog/Subscribe";
import data from "../data.json";
import Blog from "../components/HomeComponents/AllBlogs/blog";
const Newsletter = () => {
  const mydata = data.slice(0, 3);
  return (
    <div>
      <Subscribe />
      <div className="px-8 lg:px-28 pt-[30px] mb-[50px] md:mb-[102px] lg:mb-[60px]">
        <h4 className="font-semibold text-2xl mb-8 dark:text-white">
          All blog posts
        </h4>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-[2.223vw]">
          {mydata.map((ele, ind) => (
            <Blog key={ind} item={ele} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
