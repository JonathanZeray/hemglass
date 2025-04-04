import HamburgerMenu from "./HamburgerMenu";
import { AccountIcon, CartIcon } from "./Icons";
import { PrimaryMenuItems } from "./MenuItems";
import hemglassLogo from "../../assets/images/hemglass-logo.png";
import hemglassTextLogo from "../../assets/images/hemglass_text.svg";

type Props = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  cart: string[];
};

export default function NavbarLayout({ isMenuOpen, toggleMenu, cart }: Props) {
  return (
    <div className="flex w-full items-center lg:gap-12 px-3 sm:px-8 lg:px-20 py-2 lg:py-3">
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
      <nav className="hidden lg:flex text-hemglass-white font-burbank text-2xl gap-4">
        {PrimaryMenuItems.map((text) => (
          <a
            key={text}
            href="#"
            className="hover:bg-hemglass-darkblue-hover p-4 rounded-4xl"
          >
            {text}
          </a>
        ))}
        <a
          href="#"
          className="hover:bg-hemglass-darkblue-hover p-4 rounded-4xl"
        >
          Fler sidor
        </a>
      </nav>

      <div className="w-1/3 lg:w-fit flex lg:ml-auto justify-end gap-1 lg:gap-3 text-hemglass-white">
        {!isMenuOpen && (
          <>
            <AccountIcon />
            <div className="relative inline-flex items-center justify-center">
              <CartIcon />
              {cart.length !== 0 && (
                <span className="absolute -top-0 -right-1 bg-[#159FDB] text-white text-xs px-1 rounded-full">
                  {cart.length}
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
