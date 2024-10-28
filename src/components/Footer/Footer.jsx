import React from "react";

const Footer = () => {
  const data = ["Twitter", "LinkedIn", "Email", "RSS feed", "Add to Feedly"];
  return (
    <div className="px-8 lg:px-28 font-normal text-xl text-[#1A1A1A] flex flex-col-reverse md:flex-row items-center gap-x-[14px] gap-y-[30px] pb-6  md:pb-[30px] dark:text-white">
      <p>© 2023</p>
      <ul className="flex flex-col gap-[14px] md:flex-row text-center">
        {data.map((ele, ind) => (
          <li key={ind}>{ele}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
