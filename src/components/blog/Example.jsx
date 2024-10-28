const Example = ({ item, index }) => {
  return (
    <div>
      <h3 className="font-[700] text-[16px] text-[#667085] mb-3">
        Example {index + 1}: {item.title}
      </h3>
      <p className="font-[400] text-[16px] text-[#667085] mb-3">{item.des}</p>
      <img src={item.imag} alt="" className="mb-3" />
      <p className="text-center font-[400] text-[16px] px-[105.5px] mb-3 text-[#667085]">
        {item.caption}
      </p>
    </div>
  );
};

export default Example;
