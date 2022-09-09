import React from "react";
import { Link } from "react-router-dom";

const BlogItem = props => {
  const {
    id,
    blog_status,
    content,
    title,
    featured_image_url
  } = props.blogItem;

  return (
    <div>
      <Link to={`/b/${id}`}>
        <h1>{title}</h1>
      </Link>
      <div>{content}</div>
      <div className="featured-image-wrapper">
        <img src={featured_image_url} />
        </div>
    </div>
  );
};

export default BlogItem;

// import React from "react";
// import { Link } from "react-router-dom";

// const BlogItem = props => {
//   const {
//     id,
//     blog_status,
//     content,
//     title,
//     featured_image_url
//   } = props.blogItem;

//   return (
//     <div className="blog-container">
//       <div className="content-container">
//         <h1>{title}</h1>

//         <div className="featured-image-wrapper">
//           <img src={featured_image_url} />
//         </div>

//         <div className="content">{content}</div>
//       </div>
//     </div>
//   );
// };

// export default BlogItem;