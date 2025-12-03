import Image from "next/image";

interface BlogPost {
  image: string;
  title: string;
  date: string;
}

const RecentPosts = () => {
  const posts: BlogPost[] = [
    {
      image: "/assets/content-img/recent_post1.jpg",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      date: "April 17, 2018",
    },
    {
      image: "/assets/content-img/recent_post2.jpg",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      date: "April 17, 2018",
    },
  ];

  return (
    <div className="w-full">
      <h3 className="font-medium text-md text-primary uppercase tracking-wide mb-12">
        Recent Posts
      </h3>
      <div className="space-y-16">
        {posts.map((post, index) => (
          <div key={index} className="flex gap-8">
            <div className="w-30 h-30 relative shrink-0">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium text-sm text-white leading-relaxed tracking-normal">
                {post.title}
              </p>
              <p className="font-medium text-xs text-primary leading-relaxed tracking-tight">
                {post.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
