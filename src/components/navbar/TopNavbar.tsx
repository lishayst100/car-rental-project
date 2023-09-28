'use client'
import { useRef } from "react";
import Logo from "./Logo";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './Navbarr.scss'
import { LINKS } from "./navLinks";
import Link from "next/link";
import { useResize } from "@/hooks/useResize";
import AuthBtns from "./AuthBtns";

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const screenWidth = useResize()

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  return (
    <header className="navbar-logo">
      <Logo />

      <nav className="links" ref={navRef}>
        {LINKS.map((v) => (
          <Link
            className={"link font-bolder"}
            key={v.link}
            href={v.link}
            onClick={showNavbar}
          >
            {v.title}
          </Link>
        ))}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        {screenWidth < 500 && <AuthBtns />}
        {screenWidth < 500 && <Logo />}
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      {screenWidth > 500 && <AuthBtns />}
    </header>
  );
};

export default Navbar;
