import Image from "next/image";

interface Tweet {
  text: string;
  timeAgo: string;
}

const RecentTweets = () => {
  const tweets: Tweet[] = [
    {
      text: "It is a long established fact that a reader will be distracted by the readable...",
      timeAgo: "5 hours ago",
    },
    {
      text: "It is a long established fact that a reader will be distracted by the readable...",
      timeAgo: "5 hours ago",
    },
  ];

  return (
    <div className="w-full">
      <h3 className="font-medium text-md text-primary uppercase tracking-wide mb-12">
        Recent tweets
      </h3>
      <div className="space-y-18">
        {tweets.map((tweet, index) => (
          <div key={index} className="flex gap-5">
            <div className="relative w-6 h-4 mt-1.5 shrink-0">
              <Image
                src="/assets/icon/icon_Twitter.svg"
                alt="Twitter"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-sm text-white leading-relaxed tracking-normal">
                {tweet.text}
              </p>
              <p className="font-medium text-xs text-primary leading-relaxed tracking-tight">
                {tweet.timeAgo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTweets;
