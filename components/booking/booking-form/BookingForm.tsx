"use client";

import { useActionState, useEffect } from "react";
import { submitForm } from "@/app/action/action";
import Button from "@/components/shared/button/Button";
import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { ButtonShad } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";

interface BookingFormProps {
  tableId?: number;
}

const BookingForm = ({ tableId }: BookingFormProps) => {
  const [state, postReservation] = useActionState(submitForm, { error: {} });
  console.log("State", state);
  return (
    <section className="mt-5 md:mt-1 mx-5 xl:mx-0">
      <h2 className="uppercase text-2xl mb-8">Book a Table</h2>
      {state.success && <p className="pb-6 text-primary">Table {state.tableId} booked successfully!</p>}
      {state.success === false && <p className="pb-6">Something went wrong!</p>}

      <form action={postReservation} className="grid grid-cols-2 gap-4">
        <div>
          {state.error?.yourName && <p className="text-red-500">{state.error.yourName}</p>}
          <input type="text" name="yourName" placeholder="Your Name" defaultValue={!state.success ? state.yourName : ""} className="placeholder:text-white border px-3 py-6 w-full"></input>
        </div>
        <div>
          {state.error?.yourEmail && <p className="text-red-500">{state.error.yourEmail}</p>}
          <input type="email" name="yourEmail" placeholder="Your Email" defaultValue={!state.success ? state.yourEmail : ""} className="placeholder:text-white border px-3 py-6 w-full"></input>
        </div>
        <div>
          {state.error?.tableId && <p className="text-red-500">{state.error.tableId}</p>}
          <input type="text" id="tableId" name="tableId" value={tableId ?? state.tableId ?? ""} defaultValue={!state.success ? state.tableId : ""} placeholder="Table ID" className="placeholder:text-white border px-3 py-6 w-full" readOnly></input>
        </div>
        <div>
          {state.error?.numberGuests && <p className="text-red-500">{state.error.numberGuests}</p>}
          <input type="number" name="numberGuests" placeholder="Number of Guests" defaultValue={!state.success ? state.numberGuests : ""} className="placeholder:text-white border px-3 py-6 w-full"></input>
        </div>
        <div>
          {state.error?.yourDate && <p className="text-red-500">{state.error.yourDate}</p>}
          {/* <input type="date" name="yourDate" placeholder="Select Date" defaultValue={!state.success ? state.yourDate : ""} className="border px-3 py-6 w-full"></input> */}
          <DatePicker state={state} />
        </div>
        <div>
          {state.error?.yourTel && <p className="text-red-500">{state.error.yourTel}</p>}
          <input type="tel" name="yourTel" placeholder="Your Telephone" defaultValue={!state.success ? state.yourTel : ""} className="placeholder:text-white border px-3 py-6 w-full"></input>
        </div>
        <div className="col-span-2">
          {state.error?.yourComment && <p className="text-red-500">{state.error.yourComment}</p>}
          <textarea name="yourComment" rows={10} placeholder="Your Comment" defaultValue={!state.success ? state.yourComment : ""} className="placeholder:text-white border px-3 py-5 w-full"></textarea>
        </div>
        <Button isLink={false} text="Submit" stylePlace="place-self-end col-start-2"></Button>
      </form>
    </section>
  );
};

export function DatePicker({ state }: { state: any }) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  return (
    <div className="flex flex-col gap-3 h-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <ButtonShad variant="default" id="date" className="w-48 justify-between font-normal w-full h-full max-h-[74px]">
            <input type="hidden" name="yourDate" defaultValue={!state.success ? state.yourDate : ""} value={date?.toISOString()} />
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </ButtonShad>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            startMonth={new Date(new Date().getFullYear() + 0, 0)}
            endMonth={new Date(new Date().getFullYear() + 5, 6)}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default BookingForm;
