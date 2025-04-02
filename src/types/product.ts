export type Product = {
  productId: string;
  productVariantId: string;
  sku: string;
  slug: string;
  productName: string;
  description: string;
  productAsset: {
    id: string;
    preview: string;
  };
  backgroundImgCard?: {
    preview: string;
  };
  priceWithTax: {
    min: number;
    max: number;
  };
};
