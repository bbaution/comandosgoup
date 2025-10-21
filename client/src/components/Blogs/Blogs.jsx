import React from "react";
import Img1 from "../../assets/blogs/blog1.jpeg";
import Img2 from "../../assets/blogs/blog2.jpeg";
import Img3 from "../../assets/blogs/blog3.jpeg";
import BlogCard from "./BlogCard";

const BlogData = [
  {
    title:
      "Por que elegirnos",
    description:
      "seguridad privada lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    
  },
  
];
const Blogs = () => {
  return (
    <div id="porqueelegirnos" className="dark:bg-gray-900 dark:text-white">
      <div className="container py-8">
        <h1 className="mb-8  pl-2 text-center text-3xl font-bold">
           ¿Por que elegirnos?
        </h1>
        <div className="grid grid-cols-1  gap-3">
          {BlogData.map((blog) => (
            <BlogCard
              key={blog.title}
              title={blog.title}
              description={blog.description}

            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
