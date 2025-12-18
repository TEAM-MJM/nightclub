"use client";
import Button from "@/components/shared/button/Button";
import { useActionState } from "react";
import { submitSubscription } from "@/app/action/action";
import { Suspense } from "react";

const Newsletter = () => {
  const [state, formAction] = useActionState(submitSubscription, undefined);
  return (
    <Suspense>
      <div className="text-white mx-auto w-fit flex flex-col items-center justify-center gap-2 mb-24 text-center">
        <h2 className="font-ubuntu font-medium text-[clamp(1.2rem,3.2vw,2.2rem)] tracking-[2.85px] uppercase text-white text-center leading-normal">Want the latest night club news</h2>
        <p>
          Subscribe to out newsletter and never miss an <span className="text-primary">Event</span>
        </p>
        <div className="pt-8">
          <form action={formAction} key={state?.success ? Date.now() : undefined} className="flex md:gap-4 gap-6 items-center justify-center flex-col">
            {state?.error && <p className="text-primary text-center">{state.error}</p>}
            {state?.success && <p className="text-primary text-center">Subscribed successfully!</p>}
            <div className="flex gap-6 md:gap-4 md:flex-row flex-col">
              <input type="email" name="email" id="email" placeholder="Enter Your Email" className="border-b-2 border-white placeholder-white p-2 md:w-100 w-full" />
              <Button text="Subscribe" />
            </div>
          </form>
        </div>
      </div>
    </Suspense>
  );
};

export default Newsletter;
