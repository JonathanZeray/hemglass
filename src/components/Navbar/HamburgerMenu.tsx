type HamburgerMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export default function HamburgerMenu({
  isOpen,
  toggleMenu,
}: HamburgerMenuProps) {
  return (
    <button
      className="lg:hidden text-white z-2"
      onClick={toggleMenu}
      aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isOpen ? (
          <path d="M6 6L18 18M6 18L18 6" stroke="white" strokeWidth="2" />
        ) : (
          <>
            <path d="M3 6h18v2H3z" />
            <path d="M3 11h18v2H3z" />
            <path d="M3 16h18v2H3z" />
          </>
        )}
      </svg>
    </button>
  );
}
