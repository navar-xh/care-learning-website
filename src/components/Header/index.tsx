"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import "./index.css";
import HeaderDropdown from "../common/HeaderDropdown";

const CoursesList = [
  { name: "Nurse", href: "/"},
  { name: "HCA", href: "/"},
  { name: "Pharmacist", href: "/"},
]

const MoreList = [
  { name: "Blogs", href: "/" },
  { name: "Faq", href: "/" },
  { name: "About us", href: "/" },
  { name: "Contact us", href: "/" },
  { name: "Support", href: "/" },
];

const Locations = [
  { name: "Australia", href: "/" },
  { name: "UK", href: "/" },
  { name: "Ireland", href: "/" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`navbar-sticky fixed w-full mx-auto transition-all duration-300 ${
        isScrolled ? "header-fixed shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <div className="w-[130px] md:w-[200px] flex items-center logo-col">
            <Link href="/">Care learning</Link>
          </div>
          <div className="flex items-center gap-3 flex-1 mx-auto">
            <div className={`navLinks duration-500 mx-auto gradient-border ${
              mobileMenuOpen ? "active" : ""
            }`}>
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                <HeaderDropdown name="Courses" menuList={CoursesList} />
                <HeaderDropdown name="Jobs" menuList={CoursesList} />
                <li  className="">
                  <Link href="">
                    Ai
                  </Link>
                </li>
                <li  className="">
                  <Link href="">
                    CV Builder
                  </Link>
                </li>
                <HeaderDropdown name="More" menuList={MoreList} />
                <li  className="">
                  <Link href="">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <button 
                className="text-[30px] cursor-pointer md:hidden"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <Image
                  src="/images/icons/icon-hamburger.svg"
                  alt="Care Learning"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
          <div className="location-col flex-end">
            <ul className="gradient-border loc-btn">
            <HeaderDropdown name="Ireland" menuList={Locations} />
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;