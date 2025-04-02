type ProductCardProps = {
  name: string;
  imageUrl: string;
  backgroundImageUrl?: string;
  quantity: number;
  price: number;
  onAddToCart?: () => void;
};

const ProductCard = ({
  name,
  imageUrl,
  backgroundImageUrl,
  quantity,
  price,
  onAddToCart,
}: ProductCardProps) => {
  const formattedPrice = `${price / 100} kr`;

  return (
    <div className="bg-hemglass-white flex flex-col items-center gap-2 text-center">
      <div
        className="shadow p-4 flex flex-col items-center space-y-2 text-center rounded-xl bg-cover bg-center bg-no-repeat bg-hemglass-lightblue h-[300px] flex justify-center"
        style={{
          backgroundImage: backgroundImageUrl
            ? `url(${backgroundImageUrl})`
            : undefined,
        }}
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-full aspect-[4/3] object-contain rounded-xl"
        />
      </div>
      <h2 className="text-3xl font-burbank text-hemglass-darkblue -mb-2">
        {name}
      </h2>
      <p className="font-bariol text-base text-hemglass-darkblue -mb-4 ">
        {quantity}st
      </p>
      <p className="font-bariol text-lg text-hemglass-darkblue">
        {formattedPrice}
      </p>
      <button
        onClick={onAddToCart}
        className="bg-hemglass-darkblue text-hemglass-white font-bariol text-base sm:text-sm px-4 sm:px-2 py-2 sm:py-1 rounded-full hover:brightness-110 transition"
      >
        Lägg i varukorgen
      </button>
    </div>
  );
};

export default ProductCard;
