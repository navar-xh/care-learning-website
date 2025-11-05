"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface MenuItem {
  name: string;
  href: string;
}

interface MenuProps {
  name: string;
  menuList: MenuItem[];
}

function HeaderDropdown({ name, menuList }: MenuProps) {
  const [openMenu, setOpenmenu] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);

  const toggleMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenmenu(!openMenu);
  };

  // Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenmenu(false);
      }
    };

    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  return (
    <li className="relative " ref={menuRef}>
      <Link
        href="#"
        className="flex items-center gap-2 justify-center"
        onClick={toggleMenu}
      >
        {name}
        <span>
          <Image
            src="/images/icons/icon-head-arrow.svg"
            alt="carelarning"
            width={8}
            height={8}
            className={`vertical-bottom transition-transform duration-300 ${
              openMenu ? "rotate-90" : "rotate-0"
            }`}
          />
        </span>
      </Link>
      {openMenu && (
        <div className="submenu transition-transform duration-300 head-dropdown">
          <ul>
            {menuList.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export default HeaderDropdown;
