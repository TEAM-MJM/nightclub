import Button from "@/components/shared/button/Button";

const Newsletter = () => {
  return (
    <div className="text-white mx-auto w-fit flex flex-col items-center justify-center gap-2 mb-24 text-center">
      <h2 className="font-ubuntu font-medium text-[clamp(1.2rem,3.2vw,2.2rem)] tracking-[2.85px] uppercase text-white text-center text-nowrap leading-normal">Want the latest night club news</h2>
      <p>
        Subscribe to out newsletter and never miss an <span className="text-primary">Event</span>
      </p>
      <div className="pt-8">
        <form action="" className="flex md:gap-4 gap-6 md:items-end items-center justify-center flex-col md:flex-row">
          <input type="email" name="email" id="email" placeholder="Enter Your Email" className="border-b-2 border-white placeholder-white p-2 md:w-100 w-full" />
          <Button text="Subscribe" />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
