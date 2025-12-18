"use client";

import Image from "next/image";
import FetchComments from "@/components/shared/fetch-comments/FetchComments";
import Link from "next/link";
import Title from "@/components/shared/Title/Title";
import useSWR from "swr";

const imageStyle = {
  width: "100%",
  height: "auto",
};

interface BlogPost {
  title: string;
  id: string;
  author: string;
  asset: { url: string };
  content: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const RecentBlog = () => {
  const { data: blogs, error } = useSWR<BlogPost[]>("/api/blogposts", fetcher, { suspense: true, fallbackData: [] });

  if (error || !blogs || !Array.isArray(blogs)) {
    return (
      <div className="mx-auto text-center my-24">
        <p className="text-red-500">Failed to load blog posts</p>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="mx-auto text-center my-24">
        <p>No blog posts available</p>
      </div>
    );
  }

  const numberBlogs = blogs.length;
  const recentBlogs = blogs.slice(numberBlogs - 3, numberBlogs);

  return (
    <section className="lg:max-w-[1440px] max-w-9/10 px-2 m-auto mb-40">
      <Title title="Recent Blog" />
      <div className="flex lg:flex-row flex-col lg:gap-5 gap-10">
        {recentBlogs.map((blog) => (
          <Link href={`/blog/${blog.id}`} key={blog.id}>
            <Image src={blog.asset.url} alt={blog.title} width={240} height={459} style={imageStyle} unoptimized />
            <h3 className="text-md uppercase lg:mt-0 mt-8 mb-1">{blog.title}</h3>
            <div className="flex text-primary gap-2 text-sm mb-4">
              <p>BY: {blog.author}</p>
              <p>/</p> <FetchComments id={blog.id} />
              <p>/</p> <p>16 Nov 2018</p>
            </div>
            <p className="line-clamp-3 text-xs/(--line-height-loose)">{blog.content}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default RecentBlog;
