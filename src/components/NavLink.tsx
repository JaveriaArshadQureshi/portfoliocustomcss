
import Link from "next/link";
import React from "react";


interface propsType {
  href: string;
  title: string;
}
const NavLink: React.FC<propsType> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4  text-[#ADB7BE] font-bold hover:text-white sm:texl-xl rounded md:p-0"
    >
      {title}
    </Link>
  );
};

export default NavLink;
