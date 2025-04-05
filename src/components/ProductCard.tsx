import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0.15, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-hemglass-white flex flex-col h-full items-center gap-2 text-center"
    >
      <div
        className="shadow p-4 flex flex-col items-center space-y-2 text-center rounded-xl bg-cover bg-center bg-no-repeat bg-hemglass-lightblue min-h-[325px] flex justify-center"
        style={{
          backgroundImage: backgroundImageUrl
            ? `url(${backgroundImageUrl})`
            : undefined,
        }}
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-full aspect-[2/2] object-contain rounded-xl transition-transform duration-300 hover:scale-105"
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
        className="mt-auto bg-hemglass-darkblue text-hemglass-white font-bariol text-base sm:text-sm px-4 sm:px-2 py-2 sm:py-1 rounded-full cursor-pointer hover:opacity-90 transition"
      >
        Lägg i varukorgen
      </button>
    </motion.div>
  );
};

export default ProductCard;
