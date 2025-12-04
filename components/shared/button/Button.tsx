import Link from "next/link";

interface ButtonProps {
  text?: string;
  isLink?: boolean;
  route?: string;
  stylePlace?: string;
}

const Button = ({ text, isLink = false, route = "#", stylePlace }: ButtonProps) => {
  if (isLink) {
    return (
      <Link href={route} className={`border-y-2 border-white px-8 uppercase py-4 ${stylePlace}`}>
        {text}
      </Link>
    );
  } else {
    return <button className="border-y-2 border-white px-8 uppercase py-4">{text}</button>;
  }
};

export default Button;
