"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";
import CommentSection from "@/components/blog/comments-section/CommentSection";
import CommentForm from "@/components/blog/comment-form/CommentForm";
import PageBanner from "@/components/shared/Page-banner/PageBanner";
import Button from "@/components/shared/button/Button";

interface Props {
  params: { slug: string };
}

const imageStyle = {
  width: "100%",
  maxHeight: "608px",
  objectFit: "cover",
} as const;

export default function blog() {
  const [isLoading, setIsLoading] = useState(true);
  const [blog, setBlog] = useState<any>(null);
  const params = useParams<{ slug: string }>();
  const blogID = params?.slug;
  console.log(blogID);
  function getData() {
    if (!blogID) return;
    fetch(`http://localhost:4000/blogposts/${blogID}?embed=comments`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Fetch error", err);
        setIsLoading(false);
      });
  }

  const refreshData = () => {
    if (!blogID) return;
    fetch(`http://localhost:4000/blogposts/${blogID}?embed=comments`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      })
      .catch((err) => {
        console.log("Fetch error refreshing", err);
      });
  };
  useEffect(() => getData(), [blogID]);
  console.log("blog state:", blog);

  if (isLoading) return <p>Loading...</p>;
  if (!blog) return <p>Blog not found</p>;
  [blogID];
  console.log("data", blog);

  return (
    <Suspense>
      <PageBanner title={blog.title} wrap={true} />
      <div className="max-w-8/10 m-auto">
        <article>
          <Image src={blog.asset.url} alt={blog.title} width={500} height={500} style={imageStyle} unoptimized></Image>
          <h2>{blog.title}</h2>
          <div className="flex gap-2 text-primary">
            <p>{blog.author}</p>
            <p>16. Nov 2018</p>
          </div>
          <p>{blog.content}</p>
          <h2 className="text-2xl mt-8">
            {blog.comments.length}&nbsp;
            {blog.comments.length == 1 ? "Comment" : "Comments"}
          </h2>
          <CommentSection comments={blog.comments} />
        </article>
        <h3 className="uppercase text-2xl mb-10 mt-8">Leave a comment</h3>
        <CommentForm onSuccess={refreshData} id={blogID} />
      </div>
    </Suspense>
  );
}
