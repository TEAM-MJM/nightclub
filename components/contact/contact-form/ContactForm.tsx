"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/action/action";
import Button from "@/components/shared/button/Button";

const ContactForm = () => {
  const [state, formAction] = useActionState(submitContact, undefined);

  return (
    <form action={formAction} key={state?.success ? Date.now() : undefined} className="w-full max-w-[704px] mx-auto flex flex-col gap-4">
      <input type="text" name="name" placeholder="Your Name" className="w-full border border-white bg-transparent text-white text-[18px] font-ubuntu px-6 py-8 placeholder:text-white focus:outline-none focus:border-primary transition-colors" />

      <input type="email" name="email" placeholder="Your Email" className="w-full border border-white bg-transparent text-white text-[18px] font-ubuntu px-6 py-8 placeholder:text-white focus:outline-none focus:border-primary transition-colors" />

      <textarea name="comment" placeholder="Your Comment" rows={10} className="w-full border border-white bg-transparent text-white text-[18px] font-ubuntu px-6 py-8 placeholder:text-white focus:outline-none focus:border-primary transition-colors resize-none" />

      {state?.error && <p className="text-primary text-center">{state.error}</p>}

      {state?.success && <p className="text-primary text-center">Message sent successfully!</p>}

      <div className="flex justify-end mt-6">
        <Button text="send" />
      </div>
    </form>
  );
};

export default ContactForm;
