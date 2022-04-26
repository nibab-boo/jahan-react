[1mdiff --git a/src/components/Blog.jsx b/src/components/Blog.jsx[m
[1mindex 1f82b45..a61af45 100644[m
[1m--- a/src/components/Blog.jsx[m
[1m+++ b/src/components/Blog.jsx[m
[36m@@ -3,6 +3,7 @@[m [mimport React from 'react';[m
 const Blog = ({ blogs }) => {[m
   return ([m
     <div className="container mt-5 p-5" style={{ minHeight: "60vh" }}>[m
[32m+[m[32m      {/* <h2 className="jahan">Blogs</h2> */}[m
       <div className="row row-cols-md-2 row-cols-1 justify-content-between">[m
         { blogs.length === 0 ? ([m
           <>[m
[36m@@ -13,7 +14,7 @@[m [mconst Blog = ({ blogs }) => {[m
           blogs.map((blog, index) => ([m
             <div className="col">[m
 [m
[31m-              <div className={`blog-card ${index / 2 !== 0 ? "alt" : ""}`} key={index}>[m
[32m+[m[32m              <div className={`blog-card ${index / 2 !== 0 ? "alt" : ""}`} key={blog.title}>[m
                 <div className="meta">[m
                   <div className="photo" style={{ backgroundImage: `url(${blog.image_url})` }} />[m
                 </div>[m
