import Link from "next/link";
import * as motion from "motion/react-client";

interface ButtonProps {
  text?: string;
  isLink?: boolean;
  route?: string;
  stylePlace?: string;
}

const Button = ({ text, isLink = false, route = "#", stylePlace }: ButtonProps) => {
  if (isLink) {
    return (
      <Link className={stylePlace} href={route}>
        <motion.p
          whileHover={{
            color: "var(--color-primary)",
            borderColor: "var(--color-primary)",
            borderInlineWidth: "3px",
            // Will be used when gesture starts
            transition: { duration: 0.3 },
          }}
          // Will be used when gesture ends
          transition={{ duration: 0.5 }}
          className={`inline-block text-center border-y-2 border-white min-w-[180px] uppercase py-4`}
        >
          {text}
        </motion.p>
      </Link>
    );
  } else {
    return (
      <motion.button
        whileHover={{
          color: "var(--color-primary)",
          borderColor: "var(--color-primary)",
          borderInlineWidth: "3px",
          // Will be used when gesture starts
          transition: { duration: 0.3 },
        }}
        // Will be used when gesture ends
        transition={{ duration: 0.5 }}
        className={`border-y-2 border-white min-w-[180px] uppercase py-4 cursor-pointer ${stylePlace}`}
      >
        {text}
      </motion.button>
    );
  }
};

export default Button;
