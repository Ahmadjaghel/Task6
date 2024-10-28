import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const color = ["text-ultraPink", "text-govern", "text-magPink"];
  const bg = ["bg-blurmagent", "bg-balBlue", "bg-magenta"];

  return (
    <Link to={`/blog/${blog.id}`}>
      <div className="w-[232px] ">
        <img src={blog.imag} alt="blog" className="w-[100%] mb-8" />
        <p className="text-[#6941C6] font-[600] text-[14px]">{blog.date}</p>
        <div className="flex items-center justify-between my-3">
          <p className="font-[600] text-[18px] dark:text-white">{blog.title}</p>
          <div>
            <FiArrowUpRight className="w-6 h-6" />
          </div>
        </div>
        <p className="font-[400] text-[16px] text-[#667085] dark:text-lightgray mb-6 dark">
          {blog.des.split(".", 1)}
        </p>
        <div className="flex gap-2">
          {blog.config.map((ele, ind) => {
            return (
              <span
                key={ind}
                className={`${color[ind]} ${bg[ind]} font-medium text-sm px-[10px] py-[2px] rounded-xl `}
              >
                {ele}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
