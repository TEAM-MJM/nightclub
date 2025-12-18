"use client";

import { useActionState, useEffect } from "react";
import { submitForm } from "@/app/action/action";
import Button from "@/components/shared/button/Button";

interface CommentFormProps {
  id: string;
  onSuccess?: () => void;
}

const CommentForm = ({ id, onSuccess }: CommentFormProps) => {
  const [state, postComment] = useActionState(submitForm, { error: {} });
  useEffect(() => {
    if (state?.success && onSuccess) {
      onSuccess();
    }
    [state?.success, onSuccess];
  });
  console.log("State", state);
  return (
    <section>
      {state.success && <p className="pb-6 text-primary">Comment {state.tableId} submitted successfully!</p>}
      {state.success === false && <p className="pb-6">Something went wrong!</p>}

      <form action={postComment} className="grid grid-cols-2 gap-4">
        <input type="hidden" name="blogId" value={id}></input>
        <div>
          {state.error?.yourName && <p className="text-red-500">{state.error.yourName}</p>}
          <input type="text" name="yourName" placeholder="Your Name" className="border w-full py-6 px-3"></input>
        </div>
        <div>
          {state.error?.yourEmail && <p className="text-red-500">{state.error.yourEmail}</p>}
          <input type="email" name="yourEmail" placeholder="Your Email" className="border px-3 w-full py-6"></input>
        </div>
        <div className="col-span-2">
          {state.error?.yourComment && <p className="text-red-500 col-start-1 row-start-1">{state.error.yourComment}</p>}
          <textarea name="yourComment" rows={10} placeholder="Your Comment" className="border px-3 py-5 w-full"></textarea>
        </div>
        <Button isLink={false} text="Submit" stylePlace="place-self-end col-start-2"></Button>
      </form>
    </section>
  );
};

export default CommentForm;
