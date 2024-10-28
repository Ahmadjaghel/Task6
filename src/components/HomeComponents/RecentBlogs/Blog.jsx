import React from "react";
const Blog = ({ item }) => {
  return (
    <div className="col-span-2 flex flex-col md:flex-row gap-6">
      <img src={item.imag} alt="photo...." className="w-full" />
      <div>
        <p className="text-ultraPink font-semibold text-sm mb-3">{item.date}</p>
        <p className="font-semibold text-lg mb-2">{item.title}</p>
        <p className="font-normal text-base text-darkgray mb-6">{item.des}</p>
        <div>
          {item.config.map((ele, ind) => (
            <span key={ind}>{ele}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
