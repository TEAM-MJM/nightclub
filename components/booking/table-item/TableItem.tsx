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
  isSelected?: boolean;
}

const imageStyle = {
  width: "100%",
  height: "auto",
  placeSelf: "center",
  maxWidth: "285px",
};

const pVariants = {
  default: {},
  hover: { color: "var(--color-primary)", scale: 1.2 },
  tap: { scale: 0.8, type: "spring", stiffness: 300, damping: 20 },
};

const TableItem = ({ size, num, onClick, isSelected = false }: TableProps) => {
  const handleClick = () => {
    if (onClick) onClick(Number(num));
  };
  if (size == 1) {
    return (
      <motion.button initial="default" whileHover="hover" whileTap="tap" onClick={handleClick} className="grid grid-cols-1 justify-center grow-1 cursor-pointer">
        <motion.p
          variants={pVariants}
          animate={{
            color: isSelected ? "var(--color-primary)" : "currentColor",
            scale: isSelected ? 1.2 : 1,
          }}
          className={`col-start-1 col-end-2 row-start-1 row-end-2 place-self-center z-1 text-xl ${isSelected ? "text-primary" : ""}`}
        >
          {num}
        </motion.p>
        <Image style={imageStyle} className="col-start-1 col-end-2 row-start-1 row-end-2" src={table1} alt="Small table" height={186}></Image>
      </motion.button>
    );
  } else if (size == 2) {
    return (
      <motion.button initial="default" whileHover="hover" whileTap="tap" onClick={handleClick} className="grid grid-cols-1 justify-center grow-1 cursor-pointer">
        <motion.p
          variants={pVariants}
          animate={{
            color: isSelected ? "var(--color-primary)" : "currentColor",
            scale: isSelected ? 1.2 : 1,
          }}
          className={`col-start-1 col-end-2 row-start-1 row-end-2 place-self-center z-1 text-xl ${isSelected ? "text-primary" : ""}`}
        >
          {num}
        </motion.p>
        <Image style={imageStyle} className="col-start-1 col-end-2 row-start-1 row-end-2" src={table2} alt="Medium table" height={186}></Image>
      </motion.button>
    );
  } else if (size == 3) {
    return (
      <motion.button initial="default" whileHover="hover" whileTap="tap" onClick={handleClick} className="grid grid-cols-1 justify-center grow-1 cursor-pointer">
        <motion.p
          variants={pVariants}
          animate={{
            color: isSelected ? "var(--color-primary)" : "currentColor",
            scale: isSelected ? 1.2 : 1,
          }}
          className={`col-start-1 col-end-2 row-start-1 row-end-2 place-self-center z-1 text-xl ${isSelected ? "text-primary" : ""}`}
        >
          {num}
        </motion.p>
        <Image style={imageStyle} className="col-start-1 col-end-2 row-start-1 row-end-2" src={table3} alt="Big table" height={186}></Image>
      </motion.button>
    );
  }
};

export default TableItem;
