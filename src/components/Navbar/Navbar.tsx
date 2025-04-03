import { useState, useEffect } from "react";
import NavbarLayout from "./NavbarLayout";
import MobileMenu from "./MobileMenu";
import SubNavbar from "./SubNavbar";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 z-50">
      <div className="relative w-full bg-hemglass-darkblue">
        <NavbarLayout isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {isMenuOpen && <MobileMenu />}
      </div>
      <SubNavbar />
    </nav>
  );
}
