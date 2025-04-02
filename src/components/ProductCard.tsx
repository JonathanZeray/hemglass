type ProductCardProps = {
  name: string;
  imageUrl: string;
  price: number;
  onAddToCart?: () => void;
};

const ProductCard = ({
  name,
  imageUrl,
  price,
  onAddToCart,
}: ProductCardProps) => {
  const formattedPrice = `${price / 100} kr`;

  return (
    <div className="bg-hemglass-white shadow p-4 flex flex-col items-center space-y-2 text-center">
      <img
        src={imageUrl}
        alt={name}
        className="w-full aspect-[4/3] object-contain rounded-xl"
      />
      <h2 className="text-lg font-burbank text-hemglass-darkblue">{name}</h2>
      <p className="font-bariol text-base text-hemglass-darkblue">
        {formattedPrice}
      </p>
      <button
        onClick={onAddToCart}
        className="bg-hemglass-darkblue text-hemglass-white font-bariol px-4 py-2 rounded-full hover:brightness-110 transition"
      >
        Lägg till i varukorgen
      </button>
    </div>
  );
};

export default ProductCard;
