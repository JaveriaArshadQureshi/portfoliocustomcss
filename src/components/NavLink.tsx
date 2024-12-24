
import Link from "next/link";
import React from "react";
import "@/app/style/navlink.css"


interface propsType {
  href: string;
  title: string;
}
const NavLink: React.FC<propsType> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="link"
    >
      {title}
    </Link>
  );
};

export default NavLink;
