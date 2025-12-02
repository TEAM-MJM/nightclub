"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="flex flex-col items-center justify-between h-12 group">
      <p
        className={`font-medium lg:text-md text-base text-center uppercase tracking-[0.48px] font-ubuntu ${
          isActive ? "text-primary" : "text-white group-hover:text-primary"
        } transition-colors`}
      >
        {label}
      </p>
      <div
        className={`h-0.5 w-12 transition-opacity ${
          isActive
            ? "bg-linear-to-r from-transparent via-primary to-transparent opacity-100 from-10% to-90%"
            : "bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-50"
        }`}
      />
    </Link>
  );
};

export default NavItem;
