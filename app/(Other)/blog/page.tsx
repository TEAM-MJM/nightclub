import { Suspense } from "react";
import Image from "next/image";
import Button from "@/components/shared/button/Button";
import { Metadata } from "next";
import PageBanner from "@/components/shared/Page-banner/PageBanner";

export default async function blogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
  const response = await fetch(`http://localhost:4000/blogposts`);
  const blogs = await response.json();

  console.log(blogs);
  return blogs.map(
    (blog: {
      title: string;
      id: string;
      author: string;
      asset: { url: string };
      content: string;
    }) => (
      <section className="grid grid-cols-[10%_minmax(0,_1fr)_minmax(0,_1fr)_10%]" key={blog.id}>
        <Image
          className="col-span-2"
          src={blog.asset.url}
          alt={blog.title}
          width={600}
          height={600}
          style={imageStyle}
          unoptimized
        ></Image>
        <article
          className={`mx-8 my-10 flex flex-col ${
            Number(blog.id) % 2 == 0 ? "order-first col-start-2" : ""
          }`}
        >
          <h3 className="mb-1 text-md">{blog.title}</h3>
          <div className="flex gap-2 text-primary pb-4">
            {blog.author} <FetchComments id={blog.id} /> <p>16 Nov 2018</p>
          </div>
          <p className="line-clamp-3">{blog.content}</p>
          <Button
            text="Read More"
            stylePlace="place-self-end mt-5"
            isLink={true}
            route={`/blog/${blog.id}`}
          ></Button>
        </article>
      </section>
    )
  );
};

const FetchComments = async ({ id }: { id: string }) => {
  console.log("id", id);
  const response = await fetch(`http://localhost:4000/blogposts/${id}?embed=comments`);
  const data = await response.json();
  console.log(data);
  const commentsAmount = data.comments.length;
  return <p>{commentsAmount} Comments</p>;
};
