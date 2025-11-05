"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import "./index.css";
import HeaderDropdown from "../common/HeaderDropdown";

const CoursesList = [
  { name: "Nurse", href: "/" },
  { name: "HCA", href: "/" },
  { name: "Pharmacist", href: "/" },
];

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`navbar-sticky fixed w-full mx-auto transition-all duration-300 z-50 ${
          isScrolled ? "header-fixed shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="w-[130px] md:w-[200px] flex items-center logo-col z-50 relative">
              <Link href="/" className="text-xl font-bold">
                Care learning
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-3 flex-1 mx-auto">
              <div className="navLinks mx-auto gradient-border">
                <ul className="flex items-center gap-[2vw]">
                  <HeaderDropdown name="Courses" menuList={CoursesList} />
                  <HeaderDropdown name="Jobs" menuList={CoursesList} />
                  <li>
                    <Link
                      href=""
                      className="hover:opacity-70 transition-opacity"
                    >
                      Ai
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="hover:opacity-70 transition-opacity"
                    >
                      CV Builder
                    </Link>
                  </li>
                  <HeaderDropdown name="More" menuList={MoreList} />
                  <li>
                    <Link
                      href=""
                      className="hover:opacity-70 transition-opacity"
                    >
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden text-[30px] cursor-pointer z-[60] p-2 relative"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <Image
                  src="/images/icons/icon-hamburger.svg"
                  alt="Menu"
                  width={20}
                  height={20}
                />
              )}
            </button>

            {/* Desktop Location Selector */}
            <div className="hidden md:block location-col">
              <ul className="gradient-border loc-btn">
                <HeaderDropdown name="Ireland" menuList={Locations} />
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-[45]"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed md:hidden top-0 right-0 h-screen w-[80%] max-w-[300px] shadow-2xl transform transition-transform duration-300 ease-in-out z-[55] ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button Inside Mobile Menu */}
        <button
          onClick={closeMobileMenu}
          className="absolute top-4 right-4 p-2 hover:opacity-70 transition-opacity z-10"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="pt-20 px-6 pb-6 overflow-y-auto h-full mobil-menu">
          <ul className="flex flex-col gap-6">
            <li onClick={closeMobileMenu}>
              <HeaderDropdown name="Courses" menuList={CoursesList} />
            </li>
            <li onClick={closeMobileMenu}>
              <HeaderDropdown name="Jobs" menuList={CoursesList} />
            </li>
            <li onClick={closeMobileMenu}>
              <Link
                href=""
                className="block py-2 hover:opacity-70 transition-opacity"
              >
                Ai
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link
                href=""
                className="block py-2 hover:opacity-70 transition-opacity"
              >
                CV Builder
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <HeaderDropdown name="More" menuList={MoreList} />
            </li>
            <li onClick={closeMobileMenu}>
              <Link
                href=""
                className="block py-2 hover:opacity-70 transition-opacity"
              >
                Register
              </Link>
            </li>
            <li className="pt-4 border-t" onClick={closeMobileMenu}>
              <HeaderDropdown name="Ireland" menuList={Locations} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
