import BlogCard from "./BlogCard";
import blogs from "../../data.json";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { recentProduct } from "../../redux/actions/productActions";
const RecentBlog = ({ index }) => {
  // console.log(blogs);
  const myblogs = blogs.filter((ele, ind) => ele.id != index).slice(0, 9);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(recentProduct());
  }, []);
  const data = useSelector((state) => state.recentProduct);
  return (
    <div className="flex flex-col px-8 md:px-0 ">
      <h1 className="text-[#1A1A1A] font-[600] text-[24px] mb-8 dark:text-white">
        Recent blog posts
      </h1>
      <div className="flex flex-col gap-8 cursor-pointer">
        {myblogs.map((item, index) => {
          return (
            <div key={index}>
              <BlogCard blog={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentBlog;
