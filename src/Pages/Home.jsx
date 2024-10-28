import React from "react";
import Header from "../components/HomeComponents/header";
import RecentBlogs from "../components/HomeComponents/RecentBlogs/RecentBlogs";
import AllBlogs from "../components/HomeComponents/AllBlogs/AllBlogs";
const Home = () => {
  return (
    <>
      <Header />
      <RecentBlogs />
      <AllBlogs />
    </>
  );
};

export default Home;
