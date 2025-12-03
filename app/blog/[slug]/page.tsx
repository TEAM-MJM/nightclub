import Image from "next/image";
import { Suspense } from "react";
import CommentSection from "@/components/blog/comments-section/CommentSection";

interface Props {
  params: { slug: string };
}

export default async function blog({ params }: Props) {
  const { slug } = await params;
  console.log("slug", slug);
  const response = await fetch(`http://localhost:4000/blogposts/${slug}?embed=comments`);
  const blog = await response.json();
  console.log("blog", blog);
  return (
    <Suspense>
      <article className="max-w-8/10 m-auto">
        <Image src={blog.asset.url} alt={blog.title} width={500} height={500}></Image>
        <h2>{blog.title}</h2>
        <div className="flex gap-2 text-primary">
          <p>{blog.author}</p>
          <p>16. Nov 2018</p>
        </div>
        <p>{blog.content}</p>
        <h2>
          {blog.comments.length}&nbsp;
          {blog.comments.length > 1 ? "Comments" : "Comment"}
        </h2>
        <CommentSection comments={blog.comments} />
      </article>
    </Suspense>
  );
}
