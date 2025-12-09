"use client";

import { useActionState, useEffect } from "react";
import { submitComment } from "@/app/action/action";
import Button from "@/components/shared/button/Button";

interface BookingFormProps {
  tableId?: number;
  onSuccess?: () => void;
}

const BookingForm = ({ tableId, onSuccess }: BookingFormProps) => {
  //   const [state, postComment] = useActionState(submitComment, { error: {} });
  //   useEffect(() => {
  //     if (state?.success && onSuccess) {
  //       onSuccess();
  //     }
  //     [state?.success, onSuccess];
  //   });
  //   console.log("State", state);
  return (
    <form className="grid grid-cols-2 gap-4">
      <input type="text" name="yourName" placeholder="Your Name" className="border px-3 py-6"></input>
      <input type="email" name="yourEmail" placeholder="Your Email" className="border px-3 py-6"></input>
      <input type="text" name="tableId" value={tableId} placeholder="Table ID" className="border px-3 py-6" readOnly></input>
      <input type="number" name="numberGuests" placeholder="Number of Guests" className="border px-3 py-6"></input>
      <input type="date" name="yourDate" placeholder="Select Date" className="border px-3 py-6"></input>
      <input type="tel" name="yourTel" placeholder="Your Telephone" className="border px-3 py-6"></input>
      <textarea name="yourComment" rows={10} placeholder="Your Comment" className="border px-3 py-5 col-span-2"></textarea>
      <Button isLink={false} text="Submit" stylePlace="place-self-end col-start-2"></Button>
    </form>
  );
};

export default BookingForm;
