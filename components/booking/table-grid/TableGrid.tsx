import TableItem from "../table-item/TableItem";

const TableGrid = () => {
  return (
    <section className="flex flex-col gap-15">
      <div className="flex justify-between">
        <TableItem num="1" size={1} />
        <TableItem num="2" size={1} />
        <TableItem num="3" size={2} />
        <TableItem num="4" size={1} />
        <TableItem num="5" size={3} />
      </div>
      <div className="flex">
        <TableItem num="6" size={1} />
        <TableItem num="7" size={1} />
        <TableItem num="8" size={2} />
        <TableItem num="9" size={1} />
        <TableItem num="10" size={3} />
      </div>
      <div className="flex">
        <TableItem num="11" size={1} />
        <TableItem num="12" size={1} />
        <TableItem num="13" size={2} />
        <TableItem num="14" size={1} />
        <TableItem num="15" size={3} />
      </div>
    </section>
  );
};

export default TableGrid;
