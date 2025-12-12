interface TitleProps {
  title: string;
  wrap?: boolean;
  nomb?: boolean;
}

const Title = ({ title, wrap, nomb }: TitleProps) => {
  return (
    <div className={`relative md:pb-6 pb-2 ${nomb ? "mb-0" : "mb-16"}`}>
      <div>
        <h2
          className={`font-ubuntu font-medium text-[clamp(1.5rem,4vw,3rem)] tracking-[2.85px] uppercase text-white text-center leading-normal ${
            wrap ? "" : "text-nowrap"
          }`}
        >
          {title}
        </h2>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent" />
    </div>
  );
};

export default Title;
