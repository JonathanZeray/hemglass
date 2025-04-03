import { PrimaryMenuItems } from "./MenuItems";

export default function SubNavbar() {
  return (
    <>
      <div className="w-full py-1.5 lg:py-3.5 bg-hemglass-lightblue-bg lg:rounded-b-lg lg:border-[.5px] lg:border-hemglass-darkblue flex justify-center items-center gap-5">
        {PrimaryMenuItems.map((text) => (
          <a
            key={text}
            href="#"
            className="lg:hidden font-burbank text-xl md:text-2xl text-hemglass-darkblue uppercase"
          >
            {text}
          </a>
        ))}
        <div className="hidden lg:flex justify-between w-full px-12 ">
          <h4 className="font-bariol text-hemglass-darkblue text-base">
            Välj ditt glasstopp för att se lagerstatus och leveranstid
          </h4>
          <h4 className="font-bariol text-hemglass-darkblue text-base underline">
            Välj ditt glasstopp
          </h4>
        </div>
      </div>
    </>
  );
}
