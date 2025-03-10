export interface Product {
  id: string;
  title: string;
  featuredImage: {
    url: string;
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: { node: { url: string } }[];
  };
}

export interface ProductsData {
  products: {
    edges: { node: Product }[];
  };
}
