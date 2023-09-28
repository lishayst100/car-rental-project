'use client'
import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { LINKS } from "./navLinks";
import './resNavbar.css'
import AuthBtns from "./AuthBtns";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  return (
    <header className="navbar-logo py-3 d-flex justify-content-around container mx-auto  ">
      <Logo />
      <div className="w-100 d-flex flex-row justify-content-around">
        <nav
          className="links d-flex gap-4 justify-content-center align-items-center "
          ref={navRef}
        >
          {LINKS.map((link) => (
            <Link className="link-navbar" key={link.title} href={link.link}>
              {link.title}
            </Link>
          ))}

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
          <AuthBtns />
        </nav>
      </div>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
