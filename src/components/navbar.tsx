"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const navItems = [
  { id: 1, label: "Soluções", href: "#solucoes" },
  { id: 2, label: "Quem somos", href: "#quem-somos" },
  { id: 3, label: "Cases de Sucesso", href: "#cases" },
  // { id: 4, label: "Blog", href: "#blog" },
  { id: 5, label: "Faça Seu Diagnóstico", href: "#trabalhe" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth={false}
      shadow={true}
      blurred={false}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50
                  transition-all duration-300
                  bg-[#000408] text-white 
                  ${isScrolling ? "bg-opacity-70 backdrop-blur-sm" : "bg-opacity-100"}
                  w-[90%] lg:w-[75%]`} placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}    >
      <div className="flex items-center justify-between px-6 lg:px-12 py-0">
        {/* Logo */}
        <div className="flex items-center relative z-50">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => window.scrollTo(0, 0)}
          >
            <Image
              src="/image/logos/Logo.png"
              alt="Logo"
              width={150}
              height={30}
              priority
            />
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-5 font-semibold text-sm">
          <ul className="flex gap-5 items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="transition hover:text-[#58a8ab]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* WhatsApp Icon */}
          <Link
            href="https://wa.me/5538991136197"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-[#25D366] hover:text-[#1ebe5d] transition-colors"
          >
            <i className="fa-brands fa-whatsapp text-xl" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto lg:hidden"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          {open ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </IconButton>
      </div>

      {/* Mobile menu */}
      <Collapse open={open}>
        <div className="container mx-auto mt-3 rounded-2xl bg-white px-6 py-3">
          <ul className="flex flex-col gap-2 text-gray-900 font-semibold text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="block transition hover:text-[#58a8ab]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex gap-2 items-center">
            <Link
              href="https://wa.me/5538991136197"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#1ebe5d] transition-colors text-lg ml-1"
            >
              <i className="fa-brands fa-whatsapp" />
            </Link>
            <Button
              color="gray"
              size="sm"
              className="ml-auto px-3 py-1 text-sm"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Contato
            </Button>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
