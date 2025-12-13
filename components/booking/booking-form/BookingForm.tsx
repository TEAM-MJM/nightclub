"use client";

import { useActionState, useEffect } from "react";
import { submitForm } from "@/app/action/action";
import Button from "@/components/shared/button/Button";

interface BookingFormProps {
  tableId?: number;
}

const BookingForm = ({ tableId }: BookingFormProps) => {
  const [state, postReservation] = useActionState(submitForm, { error: {} });
  console.log("State", state);
  return (
    <section>
      {state.success && <p className="pb-6 text-primary">Table {state.tableId} booked successfully!</p>}
      {state.success === false && <p className="pb-6">Something went wrong!</p>}

      <form action={postReservation} className="grid grid-cols-2 gap-4">
        <div>
          {state.error?.yourName && <p className="text-red-500">{state.error.yourName}</p>}
          <input type="text" name="yourName" placeholder="Your Name" defaultValue={!state.success ? state.yourName : ""} className="border px-3 py-6 w-full"></input>
        </div>
        <div>
          {state.error?.yourEmail && <p className="text-red-500">{state.error.yourEmail}</p>}
          <input type="email" name="yourEmail" placeholder="Your Email" defaultValue={!state.success ? state.yourEmail : ""} className="border px-3 py-6 w-full"></input>
        </div>
        <div>
          {state.error?.tableId && <p className="text-red-500">{state.error.tableId}</p>}
          <input type="text" id="tableId" name="tableId" value={tableId ?? state.tableId ?? ""} defaultValue={!state.success ? state.tableId : ""} placeholder="Table ID" className="border px-3 py-6 w-full" readOnly></input>
        </div>
        <div>
          {state.error?.numberGuests && <p className="text-red-500">{state.error.numberGuests}</p>}
          <input type="number" name="numberGuests" placeholder="Number of Guests" defaultValue={!state.success ? state.numberGuests : ""} className="border px-3 py-6 w-full"></input>
        </div>
        <div>
          {state.error?.yourDate && <p className="text-red-500">{state.error.yourDate}</p>}
          <input type="date" name="yourDate" placeholder="Select Date" defaultValue={!state.success ? state.yourDate : ""} className="border px-3 py-6 w-full"></input>
        </div>
        <div>
          {state.error?.yourTel && <p className="text-red-500">{state.error.yourTel}</p>}
          <input type="tel" name="yourTel" placeholder="Your Telephone" defaultValue={!state.success ? state.yourTel : ""} className="border px-3 py-6 w-full"></input>
        </div>
        <div className="col-span-2">
          {state.error?.yourComment && <p className="text-red-500">{state.error.yourComment}</p>}
          <textarea name="yourComment" rows={10} placeholder="Your Comment" defaultValue={!state.success ? state.yourComment : ""} className="border px-3 py-5 w-full"></textarea>
        </div>
        <Button isLink={false} text="Submit" stylePlace="place-self-end col-start-2"></Button>
      </form>
    </section>
  );
};

export default BookingForm;
