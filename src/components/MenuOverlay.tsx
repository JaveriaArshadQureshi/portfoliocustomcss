import React from "react";
import NavLink from "./NavLink";
import "@/app/style/menu.css"

interface Link {
    path: string;
    title: string;
  }
  
  interface MenuOverlayProps {
    links: Link[];
  }

const MenuOverlay : React.FC<MenuOverlayProps>= ({ links }) => {
  return (
    <ul className="menu">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;