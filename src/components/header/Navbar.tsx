"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Close, } from "@mui/icons-material";
import ThemeToggle from "@components/ui/themeToggle"
import styles from "./navBar.module.scss"; // Import the CSS module

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const getLinkClass = (href: string) => {
    return `${styles.navText} ${isActive(href) ? styles.active : ""}`;
  };
  

  return (
    <nav className={styles.navContainer}>
      <>
      {/* Logo */}
      <div className={styles.inner}>

      <Link href="/">
        <div className={styles.logoContainer}>
        </div>
      </Link>

        {/* Nav Menu */}
        <div className={styles.navMenu}>
        <Link href="/" className={getLinkClass("/")}>Home</Link>
          <Link href="/catalogue" className={getLinkClass("/catalogue")}>Catalogue</Link>
          <Link href="/contact-us" className={getLinkClass("/contact-us")}>Contact Us</Link>
        </div>
        {/* Special Actions */}
        <div className={`flex items-center ${styles.specialActions}`}>
          <ThemeToggle/>
          <div className={styles.hide}>
              <button onClick={toggleMenu}>
                {isMenuOpen ? <Close className={styles.navIcons}  /> : <Menu className={styles.navIcons} />}
              </button>
          </div>
        </div>
      </div>
      </>
      <>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={getLinkClass("/")}>Home</Link>
          <Link href="/catalogue" className={getLinkClass("/catalogue")}>Catalogue</Link>
          <Link href="/contact-us" className={getLinkClass("/contact-us")}>Contact Us</Link>
        </div>
      )}
      </>
    </nav>
  );
};

export default NavBar;