'use client'
import React, { MutableRefObject, RefObject } from "react";
import Link from 'next/link';
import { LINKS } from './navLinks';
import { useSession } from 'next-auth/react';




const Links = () => {
  const { data: session } = useSession();
  return (
    <nav className="links d-flex gap-4">
      {LINKS.map((link) => (
        <Link className="link-navbar" key={link.title} href={link.link}>
          {link.title}
        </Link>
      ))}
      {session?.user?.name === "lishay shem tov" && (
        <Link className="link-navbar" href={"/admin"}>
          Admin
        </Link>
      )}
    </nav>
  );
};

export default Links