import React from "react";
import "../index.css";
import Navbar from "../component/Nav/Navbar";
import BlogItem from "../component/Blog/BlogItem";
import Footer from "../component/Footer/Footer";

function Blog() {
  return (
    <div>
      <Navbar />
      <BlogItem />
      <Footer />
    </div>
  );
}

export default Blog;
