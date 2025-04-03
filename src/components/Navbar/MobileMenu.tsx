import { PrimaryMenuItems, SecondaryMenuItems } from "./MenuItems";

export default function MobileMenu() {
  return (
    <div className="lg:hidden absolute top-full left-0 w-full bg-hemglass-darkblue h-screen z-10 p-6 pt-8.5 flex flex-col gap-2.5">
      {PrimaryMenuItems.map((text) => (
        <a
          key={text}
          href="#"
          className="text-hemglass-white text-[32px] font-burbank"
        >
          {text}
        </a>
      ))}

      <div className="flex flex-col pt-5 gap-1.5">
        {SecondaryMenuItems.map((text) => (
          <a
            key={text}
            href="#"
            className="font-bariol text-hemglass-white text-base"
          >
            {text}
          </a>
        ))}
      </div>
    </div>
  );
}
