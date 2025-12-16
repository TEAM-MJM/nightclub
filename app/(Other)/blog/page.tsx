import { Suspense } from "react";
import Image from "next/image";
import Button from "@/components/shared/button/Button";
import { Metadata } from "next";
import PageBanner from "@/components/shared/Page-banner/PageBanner";
import FetchComments from "@/components/shared/fetch-comments/FetchComments";

export default async function blogPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto w-24 h-24 flex items-center justify-center my-24">
          <Image src="/assets/loader/madbars.gif" alt="Loading..." width={100} height={100} unoptimized />
        </div>
      }
    >
      <PageBanner title="Blog" wrap={true} />
      <div>
        <FetchBlogs />
      </div>
    </Suspense>
  );
}

export const metadata: Metadata = {
  title: "Blog",
  description: "Experience the Ultimate Nightlife",
};

const imageStyle = {
  width: "100%",
  height: "auto",
};

const FetchBlogs = async () => {
  try {
    const response = await fetch(`http://localhost:4000/blogposts`);
    const blogs = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch blog posts");
    }

    if (!blogs || blogs.length === 0) {
      throw new Error("No blog posts available.");
    }
    return blogs.map((blog: { title: string; id: string; author: string; asset: { url: string }; content: string }) => (
      <section className="lg:grid grid-cols-[10%_minmax(0,_1fr)_minmax(0,_1fr)_10%]" key={blog.id}>
        <Image className="col-span-2" src={blog.asset.url} alt={blog.title} width={600} height={600} style={imageStyle} unoptimized></Image>
        <article className={`mx-8 my-10 flex flex-col ${Number(blog.id) % 2 == 0 ? "order-first col-start-2" : ""}`}>
          <h3 className="mb-1 text-md">{blog.title}</h3>
          <div className="flex gap-2 text-primary pb-4">
            <p>BY: {blog.author}</p> <p>/</p> <FetchComments id={blog.id} /> <p>/</p> <p>16 Nov 2018</p>
          </div>
          <p className="line-clamp-3">{blog.content}</p>
          <Button text="Read More" stylePlace="place-self-end mt-5" isLink={true} route={`/blog/${blog.id}`}></Button>
        </article>
      </section>
    ));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return <p className="text-center my-10">Unable to load blog posts at this time. Please try again later.</p>;
  }
};
