"use client";

import TableItem from "../table-item/TableItem";
import { useState } from "react";
import BookingForm from "@/components/booking/booking-form/BookingForm";

const TableGrid = () => {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  console.log("Selected table:", selectedTable);
  return (
    <section className="flex flex-col md:gap-15">
      <div className="flex md:flex-row flex-col">
        <TableItem num="1" size={1} onClick={setSelectedTable} />
        <TableItem num="2" size={1} onClick={setSelectedTable} />
        <TableItem num="3" size={2} onClick={setSelectedTable} />
        <TableItem num="4" size={1} onClick={setSelectedTable} />
        <TableItem num="5" size={3} onClick={setSelectedTable} />
      </div>
      <div className="flex md:flex-row flex-col">
        <TableItem num="6" size={1} onClick={setSelectedTable} />
        <TableItem num="7" size={1} onClick={setSelectedTable} />
        <TableItem num="8" size={2} onClick={setSelectedTable} />
        <TableItem num="9" size={1} onClick={setSelectedTable} />
        <TableItem num="10" size={3} onClick={setSelectedTable} />
      </div>
      <div className="flex md:flex-row flex-col">
        <TableItem num="11" size={1} onClick={setSelectedTable} />
        <TableItem num="12" size={1} onClick={setSelectedTable} />
        <TableItem num="13" size={2} onClick={setSelectedTable} />
        <TableItem num="14" size={1} onClick={setSelectedTable} />
        <TableItem num="15" size={3} onClick={setSelectedTable} />
      </div>
      <BookingForm tableId={selectedTable ?? undefined} />
    </section>
  );
};

export default TableGrid;
