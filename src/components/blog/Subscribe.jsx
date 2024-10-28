import React from "react";

const Subscribe = () => {
  return (
    <div>
      <h6 className="font-[600] text-[16px] text-[#7F56D9] text-center mb-3">
        Newlatters
      </h6>
      <h1 className="font-[600] text-[48px] text-[#1A1A1A] dark:text-white text-center mb-6">
        Stories and interviews
      </h1>
      <p className="font-[400] text-[20px]  text-[#667085] text-center px-16">
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>
      <div className="flex flex-col md:flex-row justify-center mt-10 gap-4 mx-32 md:mx-0">
        <div className="">
          <input
            type="text"
            placeholder="Enter your email"
            className="border-2 p-2 rounded-lg lg:w-[360px] w-[100%]"
          />
          <p className="font-[400] text-[14px]  text-[#667085]">
            We care about your data in our privacy policy
          </p>
        </div>
        <button className="bg-[#7F56D9] text-white w-[118px] text-[16px] font-[500] px-5 py-3 h-12 rounded-lg">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
