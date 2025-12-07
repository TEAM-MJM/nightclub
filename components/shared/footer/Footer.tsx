import Location from "./location/Location";
import OpeningHours from "./opening-hours/OpeningHours";
import RecentPosts from "./recent-posts/RecentPosts";
import RecentTweets from "./recent-tweets/RecentTweets";
import SocialIcons from "@/components/shared/social-icons/SocialIcons";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full h-[800px] bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/assets/bg/footerbg.jpg" alt="" fill className="object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-bg-overlay-dark" />
      </div>

      {/* Content */}
      <div className="relative max-w-400 mx-auto px-8 py-14 lg:py-24">
        {/* Top Section - Logo and Columns */}
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:text-left text-center gap-16 mb-20">
          {/* Left Column - Logo, Location, Opening Hours */}
          <div className="flex flex-col">
            <div className="mb-10 justify-center flex lg:block">
              <Image
                src="/assets/Logo.png"
                alt="NIGHTCLUB - HAVE A GOOD TIME"
                width={228}
                height={54}
                className="object-contain"
              />
            </div>
            <Location />
            <OpeningHours />
          </div>

          {/* Middle Column - Recent Posts */}
          <div className="lg:block hidden">
            <RecentPosts />
          </div>

          {/* Right Column - Recent Tweets */}
          <div className="lg:block hidden">
            <RecentTweets />
          </div>
        </div>

        {/* Bottom Section - Social & Copyright */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-16 items-center lg:pt-16 pt-0">
          <div>
            <p className="font-medium text-sm text-white leading-relaxed tracking-normal text-center lg:text-left">
              Night Club PSD Template - All Rights Reserved
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 text-center -order-1 lg:order-0">
            <p className="font-medium text-sm text-white leading-relaxed tracking-normal">
              Stay Connected With Us
            </p>
            <SocialIcons />
          </div>
          <div className="lg:text-right text-center">
            <p className="font-medium text-sm text-white leading-relaxed tracking-normal">
              Copyright © NightClub
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
