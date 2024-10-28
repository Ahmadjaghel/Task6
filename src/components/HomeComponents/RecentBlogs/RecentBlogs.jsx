import React from "react";
import data from "../../../data.json";
import { FiArrowUpRight } from "react-icons/fi";

const RecentBlogs = () => {
  const items = data.slice(data.length - 4, data.length);
  const color = ["text-ultraPink", "text-govern", "text-magPink"];
  const bg = ["bg-blurmagent", "bg-balBlue", "bg-magenta"];
  return (
    <div className="py-[30px] px-8 lg:px-[7.778vw] ">
      <h4 className="font-semibold text-2xl mb-8 dark:text-white">
        Recent blog posts
      </h4>
      <div className="flex flex-wrap gap-y-8 justify-between ">
        <div className="flex flex-col gap-6 w-full lg:w-[41.112vw]">
          <img
            src={items[0].imag}
            alt="photo...."
            className="w-full h-[200px] md:h-[228px] "
          />
          <div>
            <p className="text-ultraPink font-semibold text-sm mb-3">
              {items[0].date}
            </p>
            <div className="flex justify-between">
              <p className="font-semibold text-lg mb-2 dark:text-white">
                {items[0].title}
              </p>
              <FiArrowUpRight size={28} className="dark:text-white" />
            </div>
            <p className="font-normal text-base text-darkgray dark:text-lightgray mb-6">
              {items[0].des}
            </p>
            <div className="flex flex-row gap-2">
              {items[0].config.map((ele, ind) => (
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
        <div className=" w-full lg:w-[41.112vw] flex flex-col gap-8">
          <div className=" flex flex-col md:flex-row gap-6">
            <img
              src={items[1].imag}
              alt="photo...."
              className="w-full  h-[51.285vw] md:h-[200px] md:w-80  md:min-h-full"
            />
            <div>
              <p className="text-ultraPink font-semibold text-sm mb-3">
                {items[1].date}
              </p>
              <div className="flex justify-between">
                <p className="font-semibold text-lg mb-2 dark:text-white">
                  {items[1].title}
                </p>
                <FiArrowUpRight size={28} className="dark:text-white" />
              </div>
              <p className="font-normal text-base text-darkgray dark:text-lightgray mb-6">
                {items[1].des}
              </p>
              <div className="flex flex-row gap-2">
                {items[1].config.map((ele, ind) => (
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
          <div className=" flex flex-col md:flex-row gap-6">
            <img
              src={items[2].imag}
              alt="photo...."
              className="w-full  h-[51.285vw] md:h-[200px] md:w-80  md:min-h-full"
            />
            <div>
              <p className="text-ultraPink font-semibold text-sm mb-3">
                {items[2].date}
              </p>
              <div className="flex justify-between">
                <p className="font-semibold text-lg mb-2 dark:text-white">
                  {items[2].title}
                </p>
                <FiArrowUpRight size={28} className="dark:text-white" />
              </div>
              <p className="font-normal text-base text-darkgray dark:text-lightgray mb-6">
                {items[2].des}
              </p>
              <div className="flex flex-row gap-2">
                {items[2].config.map((ele, ind) => (
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
        </div>
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          <img
            src={items[3].imag}
            alt="photo...."
            className="w-full lg:w-[41.112vw] h-[200px] md:h-[246px] lg:min-h-full "
          />
          <div>
            <p className="text-ultraPink font-semibold text-sm mb-3">
              {items[3].date}
            </p>

            <div className="flex justify-between">
              <p className="font-semibold text-lg mb-2 dark:text-white">
                {items[3].title}
              </p>
              <FiArrowUpRight size={28} className="dark:text-white" />
            </div>
            <p className="font-normal text-base text-darkgray dark:text-lightgray mb-6">
              {items[3].des}
            </p>
            <div className="flex flex-row gap-2">
              {items[3].config.map((ele, ind) => (
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
      </div>
    </div>
  );
};

export default RecentBlogs;
