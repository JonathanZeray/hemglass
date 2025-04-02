import { Product } from "../types/product";

const GRAPHQL_ENDPOINT = "https://ehandel.hemglass.se/shop-api";

const PRODUCTS_QUERY = `
  query search($input: SearchInput!) {
    search(input: $input) {
      totalItems
      items {
        sku
        productId
        productVariantId
        productName
        slug
        description
        productAsset {
          id
          preview
        }
        backgroundImgCard {
         preview
        }
        priceWithTax {
          ... on PriceRange {
            min
            max
          }
          ... on SinglePrice {
            value
          }
        }
      }
    }
  }
`;

const variables = {
  input: {
    term: "",
    collectionId: "2",
    facetValueIds: [],
    facetValueFilters: [],
    groupByProduct: true,
    sort: {
      popularity: "DESC",
    },
    take: 100,
    skip: 0,
  },
};

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: PRODUCTS_QUERY,
        variables,
        operationName: "search",
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const json = await res.json();

    if (json.errors) {
      console.error("GraphQL errors:", json.errors);
      throw new Error(json.errors[0]?.message || "GraphQL error");
    }

    return json.data.search.items ?? [];
  } catch (error) {
    console.error("fetchProducts failed:", error);
    throw error;
  }
}
