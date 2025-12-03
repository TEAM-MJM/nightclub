import { Suspense } from "react";
import Image from "next/image";
import { stringify } from "querystring";

export default async function blogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <FetchBlogs />
      </div>
    </Suspense>
  );
}

const FetchBlogs = async () => {
  const response = await fetch(`http://localhost:4000/blogposts`);
  const blogs = await response.json();

  console.log(blogs);
  return blogs.map((blog: { title: string; id: string; author: string; asset: { url: string }; content: string }) => (
    <section className="grid grid-cols-2" key={blog.id}>
      <Image src={blog.asset.url} alt={blog.title} width={500} height={500}></Image>
      <article>
        <h3>{blog.title}</h3>
        <p className="flex gap-2 text-primary">
          {blog.author} <FetchComments id={blog.id} /> <p>16 Nov 2018</p>
        </p>
        <p>{blog.content.slice(0, 367)}</p>
      </article>
    </section>
  ));
};

const FetchComments = async ({ id }: { id: string }) => {
  console.log("id", id);
  const response = await fetch(`http://localhost:4000/blogposts/${id}?embed=comments`);
  const data = await response.json();
  console.log(data);
  const commentsAmount = data.comments.length;
  return <p>{commentsAmount} Comments</p>;
};
