import hemglassHeroImg from "../assets/images/hemglass-hero-img.webp";

export default function Hero() {
  return (
    <div className="bg-hemglass-white flex flex-col mt-8 mb-16 lg:mb-20 px-4 lg:px-20">
      <h2 className="font-burbank text-hemglass-darkblue text-5xl lg:text-6xl lg:pt-4 mb-16 w-full text-left">
        Välkommen till glassbutiken!
      </h2>
      <div className="md:flex md:flex-row">
        <img
          src={hemglassHeroImg}
          alt="Barn som ler"
          className="object-cover min-h-[300px] md:max-h-[150px] md:w-1/2"
        />
        <div className="bg-hemglass-lightblue-bg px-4 md:px-12 py-8 flex flex-col gap-4 md:w-1/2 md:justify-center">
          <h3 className="text-hemglass-darkblue font-burbank text-3xl lg:text-4xl">
            Beställ var och när du vill, så ses vi vid bilen!
          </h3>
          <p className="text-hemglass-darkblue font-bariol">
            Så här funkar det: Lägg produkterna du vill ha i varukorgen, betala,
            sen hämtar du ut dem nästa gång Hemglassbilen kommer till dig.
            Självklart får du ett SMS när bilen är på väg!
          </p>
        </div>
      </div>
    </div>
  );
}
