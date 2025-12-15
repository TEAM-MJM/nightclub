import Image from "next/image";
import FetchComments from "@/components/shared/fetch-comments/FetchComments";
import Link from "next/link";
import Title from "@/components/shared/Title/Title";
import { Suspense } from "react";

const imageStyle = {
  width: "100%",
  height: "auto",
};

const RecentBlog = async () => {
  const response = await fetch(`http://localhost:4000/blogposts`);
  const blogs = await response.json();
  const numberBlogs = blogs.length;
  const recentBlogs = blogs.slice(numberBlogs - 3, numberBlogs);
  return (
    <Suspense
      fallback={
        <div className="mx-auto w-24 h-24 flex items-center justify-center my-24">
          <Image src="/assets/loader/madbars.gif" alt="Loading..." width={100} height={100} unoptimized />
        </div>
      }
    >
      <section className="max-w-[1440px] m-auto mb-40">
        <Title title="Recent Blog" />
        <div className="flex gap-5">
          {recentBlogs.map((blog: { title: string; id: string; author: string; asset: { url: string }; content: string }) => (
            <Link href={`/blog/${blog.id}`} key={blog.id}>
              <Image src={blog.asset.url} alt={blog.title} width={240} height={459} style={imageStyle} unoptimized />
              <h3 className="text-md uppercase mb-1">{blog.title}</h3>
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
    </Suspense>
  );
};
export default RecentBlog;
