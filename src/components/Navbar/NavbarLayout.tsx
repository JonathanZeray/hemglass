import HamburgerMenu from "./HamburgerMenu";
import { AccountIcon, CartIcon } from "./Icons";
import hemglassLogo from "../../assets/images/hemglass-logo.png";
import hemglassTextLogo from "../../assets/images/hemglass_text.svg";
import { PrimaryMenuItems } from "./MenuItems";

type Props = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export default function NavbarLayout({ isMenuOpen, toggleMenu }: Props) {
  return (
    <div className="flex w-full items-center lg:gap-12 px-3 sm:px-8 lg:px-12 py-2 lg:py-4">
      <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="w-1/3 lg:w-fit flex justify-center lg:justify-start">
        <img
          src={hemglassLogo}
          alt="Hemglass logotyp"
          className="lg:hidden w-15 sm:w-18 z-20"
        />
        <img
          src={hemglassTextLogo}
          alt="Hemglass logotyp med text"
          className="hidden lg:block w-16 z-20"
        />
      </div>
      <nav className="hidden lg:flex text-hemglass-white font-burbank text-2xl gap-12">
        {PrimaryMenuItems.map((text) => (
          <a key={text} href="#">
            {text}
          </a>
        ))}
        <a href="#">Fler sidor</a>
      </nav>

      <div className="w-1/3 lg:w-fit flex lg:ml-auto justify-end gap-1 text-hemglass-white">
        <div className={isMenuOpen ? "invisible" : "visible"}>
          <AccountIcon />
        </div>
        <div className={isMenuOpen ? "invisible" : "visible"}>
          <CartIcon />
        </div>
      </div>
    </div>
  );
}
