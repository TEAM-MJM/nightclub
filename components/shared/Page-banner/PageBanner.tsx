import Image from "next/image";
import Title from "../Title/Title";

interface PageBannerProps {
  title: string;
  wrap?: boolean;
}

const PageBanner = ({ title, wrap }: PageBannerProps) => {
  return (
    <div className="relative w-full md:h-[272px] h-[100px] bg-black mb-24 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/assets/bg/footerbg.jpg" alt="" fill className="object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-bg-overlay-dark" />
      </div>
      <Title title={title} wrap={wrap} nomb={true} />
    </div>
  );
};

export default PageBanner;
