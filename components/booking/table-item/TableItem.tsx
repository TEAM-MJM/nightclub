import Image from "next/image";
import table1 from "@/public/assets/table/table_1.png";
import table2 from "@/public/assets/table/table_2.png";
import table3 from "@/public/assets/table/table_3.png";

interface TableProps {
  size?: number;
  num?: string;
}

const TableItem = ({ size, num }: TableProps) => {
  if (size == 1) {
    return (
      <div className="grid grid-cols-[max-content] grow-1 cursor-pointer">
        <p className="col-start-1 col-end-2 row-start-1 row-end-2 place-self-center z-1 text-xl">{num}</p>
        <Image className="col-start-1 col-end-2 row-start-1 row-end-2" src={table1} alt="Small table" height={186}></Image>
      </div>
    );
  } else if (size == 2) {
    return (
      <div className="grid grid-cols-[max-content] grow-1">
        <p className="col-start-1 col-end-2 row-start-1 row-end-2 place-self-center z-1 text-xl">{num}</p>
        <Image className="col-start-1 col-end-2 row-start-1 row-end-2" src={table2} alt="Medium table" height={186}></Image>
      </div>
    );
  } else if (size == 3) {
    return (
      <div className="grid grid-cols-[max-content] grow-1">
        <p className="col-start-1 col-end-2 row-start-1 row-end-2 place-self-center z-1 text-xl">{num}</p>
        <Image className="col-start-1 col-end-2 row-start-1 row-end-2" src={table3} alt="Big table" height={186}></Image>
      </div>
    );
  }
};

export default TableItem;
