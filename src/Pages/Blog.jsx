import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import RecentBlogs from "../components/blog/RecentBlog";
import BlogItem from "../components/blog/BlogItem";
import Subscribe from "../components/blog/Subscribe";

const Blog = () => {
  const params = useParams();

  return (
    <div className="mb-[42px]">
      <div className="flex flex-col-reverse items-center md:items-start md:flex-row lg:px-[120px] sm:px-[32px] gap-8">
        <RecentBlogs index={params.IdItem} />
        <BlogItem id={params.IdItem} />
      </div>
      <div className="md:hidden block">
        <Subscribe />
      </div>
    </div>
  );
};

export default Blog;
