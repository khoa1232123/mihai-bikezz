"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "Our Bikes", path: "/our-bikes" },
];

const Nav = ({ className }) => {
  const pathname = usePathname();
  return (
    <nav className={className}>
      {links.map((link) => {
        return (
          <Link
            href={link.path}
            key={link.name}
            className={`${link.path === pathname ? "text-accent" : ""}`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
