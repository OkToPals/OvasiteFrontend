"use client"
import React, { useState } from "react";
import Link from "next/link";
import "../styles/styles.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuHeight = menuOpen ? "auto" : "0";

  const menuStyle = {
    height: menuHeight,
    overflow: "hidden",
    transition: "height 0.3s ease",
  };

  const linkStyles = {
    display: "flex",
    fontWeight: 500,
    alignItems: "center",
    color: "#333",
    marginTop: "14px",
    justifyContent: "center",
  };

  return (
    <header className="body-font fixed w-full z-50">
      <div className="custom-container">
        <div
          className="text-[#1F1F1F] body-font"
          style={{ backgroundColor: "white" }}
        >
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href="/">
              <a
                className="flex title-font font-bold items-center mb-4 md:mb-0"
                style={{ color: "rgb(256, 89, 90)", marginLeft: "50px" }}
              >
                <img src="/Logo.jpg" width={60} />
              </a>
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-4">
              <Link href="/home">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/features">Features</Link>
              <Link href="/pricing">Pricing</Link>
            </nav>
            <Link href="/signin">
              <button
                className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                style={{ marginRight: "10px" }}
              >
                Sign in
              </button>
            </Link>
            <Link href="/signup">
              <button
                className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                style={{ backgroundColor: "rgb(255, 89, 90)", color: "white" }}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div id="header">
        <div style={linkStyles} id="divs">
          <span
            className="text-[#FF595A] text-2xl font-bold cursor-pointer"
            style={{ marginRight: "70px" }}
          >
            OvaSite
          </span>
          <Link href="/signin" onClick={closeMenu}>
            <a className="hover:text-[#fe5000] cursor-pointer text-[#1F1F1F]">
              Sign In
            </a>
          </Link>
          <Link href="/signup" onClick={closeMenu}>
            <button
              style={{ marginRight: "30px" }}
              className="items-center bg-[#FF595A] border-0 py-2 px-6 focus:outline-none hover:bg-[#fe5000] rounded text-[#001233] font-bold"
            >
              Get Started
            </button>
          </Link>
          <span id="span" onClick={toggleMenu}>
            &#9776;
          </span>
        </div>
      </div>
      <div>
        <ul id="ul" style={menuStyle}>
          <li>
            <Link href="/home" onClick={closeMenu}>
              <a className="hover:text-[#fe5000] cursor-pointer text-[#1F1F1F]">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu}>
              <a className="hover:text-[#fe5000] cursor-pointer text-[#1F1F1F]">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/features" onClick={closeMenu}>
              <a className="hover:text-[#fe5000] cursor-pointer text-[#1F1F1F]">
                Features
              </a>
            </Link>
          </li>
          <li>
            <Link href="/pricing" onClick={closeMenu}>
              <a className="hover:text-[#fe5000] cursor-pointer text-[#1F1F1F]">
                Pricing
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
