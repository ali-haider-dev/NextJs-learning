import React from "react";

const BlogDetails = async ({ params }: { params: { slug?: string[] } }) => {
  const slug = params.slug;
  console.log(slug);

  if (slug && slug.length > 0) {
    return (
      <div>
        <h1>URL: /{slug.join("/")}</h1>
      </div>
    );
  }
  return (
    <>
      <h1>Hello From Blogs Default Page</h1>
    </>
  );
};

export default BlogDetails;
