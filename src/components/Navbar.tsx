"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import "@/app/style/navbar.css";


interface NavLink {
  title: string;
  path: string;
}

const navlink:NavLink[] = [
  {
    title: "Home",
    path: "./",
  },
  {
    title: "About",
    path: "#about",
  },
  // {
  //   title: "Projects",
  //   path: "#projects",
  // },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/">
          <div className="logo">
            Jave<span>ria•</span>
          </div>
        </Link>
      
        <div className="mobile-menu">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="menu-button"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="menu-button"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu" id="navbar">
          <ul className="nav-list">
            {navlink.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navlink} /> : null}
    </nav>
  );
};

 export default Navbar;