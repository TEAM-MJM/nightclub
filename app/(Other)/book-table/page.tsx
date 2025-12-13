import TableGrid from "@/components/booking/table-grid/TableGrid";
import BookingForm from "@/components/booking/booking-form/BookingForm";
import { Metadata } from "next";
import PageBanner from "@/components/shared/Page-banner/PageBanner";

export const metadata: Metadata = {
  title: "Book Table",
  description: "Experience the Ultimate Nightlife",
};

export default function Booking() {
  return (
    <div>
      <PageBanner title="Book a Table" wrap={true} />
      <div className="flex min-h-screen items-center justify-center">
        <main className="w-full md:max-w-[1440px] max-w-9/10 flex-col items-center justify-betweensm:items-start">
          <TableGrid></TableGrid>
        </main>
      </div>
    </div>
  );
}
