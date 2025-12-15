"use client";

import Image from "next/image";
import table1 from "@/public/assets/table/table_1.png";
import table2 from "@/public/assets/table/table_2.png";
import table3 from "@/public/assets/table/table_3.png";
import * as motion from "motion/react-client";

interface TableProps {
  size?: number;
  num?: string;
  onClick?: (tableId: number) => void;
}

const imageStyle = {
  width: "100%",
  height: "auto",
  placeSelf: "center",
  maxWidth: "285px",
};

const pVariants = {
  default: { rotate: 0 },
  hover: { color: "var(--color-primary)", scale: 1.2 },
};

const TableItem = ({ size, num, onClick }: TableProps) => {
  const handleClick = () => {
    if (onClick) onClick(Number(num));
  };

  if (size == 1) {
    return (
      <motion.button initial="default" whileHover="hover" onClick={handleClick} className="grid grid-cols-1 justify-center grow-1 cursor-pointer">
        <motion.p variants={pVariants} className="col-start-1 col-end-2 row-start-1 row-end-2 place-self-center z-1 text-xl">
          {num}
        </motion.p>
        <Image style={imageStyle} className="col-start-1 col-end-2 row-start-1 row-end-2" src={table1} alt="Small table" height={186}></Image>
      </motion.button>
    );
  } else if (size == 2) {
    return (
      <motion.button initial="default" whileHover="hover" onClick={handleClick} className="grid grid-cols-1 justify-center grow-1 cursor-pointer">
        <motion.p variants={pVariants} className="col-start-1 col-end-2 row-start-1 row-end-2 place-self-center z-1 text-xl">
          {num}
        </motion.p>
        <Image style={imageStyle} className="col-start-1 col-end-2 row-start-1 row-end-2" src={table2} alt="Medium table" height={186}></Image>
      </motion.button>
    );
  } else if (size == 3) {
    return (
      <motion.button initial="default" whileHover="hover" onClick={handleClick} className="grid grid-cols-1 justify-center grow-1 cursor-pointer">
        <motion.p variants={pVariants} className="col-start-1 col-end-2 row-start-1 row-end-2 place-self-center z-1 text-xl">
          {num}
        </motion.p>
        <Image style={imageStyle} className="col-start-1 col-end-2 row-start-1 row-end-2" src={table3} alt="Big table" height={186}></Image>
      </motion.button>
    );
  }
};

export default TableItem;
