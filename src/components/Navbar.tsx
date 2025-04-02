import { useState } from "react";
import hemglassLogo from "../assets/images/hemglass-logo.png";
import { AccountIcon, CartIcon } from "./Icons";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log("meny öppen?", !isMenuOpen);
  };
  return (
    <div className="w-full bg-hemglass-darkblue h-full flex justify-between px-4 items-center py-2">
      <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div>
        <img src={hemglassLogo} alt="Hemglass logotyp" className="w-16" />
      </div>
      <div className="flex text-hemglass-white gap-1">
        <AccountIcon />
        <CartIcon />
      </div>
    </div>
  );
}
