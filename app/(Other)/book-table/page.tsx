import TableGrid from "@/components/booking/table-grid/TableGrid";
import BookingForm from "@/components/booking/booking-form/BookingForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Table",
  description: "Experience the Ultimate Nightlife",
};

export default function Booking() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="w-full max-w-[1440px] flex-col items-center justify-betweensm:items-start">
        <TableGrid></TableGrid>
        <BookingForm></BookingForm>
      </main>
    </div>
  );
}
