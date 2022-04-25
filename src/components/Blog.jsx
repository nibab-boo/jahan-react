import React from 'react';

const Blog = ({ blogs }) => {
  return (
    <div className="container mt-5 p-5" style={{ minHeight: "60vh" }}>
      <div className="row row-cols-md-2 row-cols-1 justify-content-between">
        { blogs.length === 0 ? (
          <>
            <p>現在ブログはありません！</p>
            <p>No blogs right now!</p>
          </>
        ) : (
          blogs.map((blog, index) => (
            <div className="col">

              <div className={`blog-card ${index / 2 !== 0 ? "alt" : ""}`} key={index}>
                <div className="meta">
                  <div className="photo" style={{ backgroundImage: `url(${blog.image_url})` }} />
                </div>
                <div className="description">
                  <h1>{blog.title}</h1>
                  <p>
                    {blog.description}
                  </p>
                  <p className="read-more">
                    <a href={blog.link}>Link to Post</a>
                  </p>
                </div>
              </div>
            </div>
          )))}
      </div>
    </div>
  );
};

export default Blog;
