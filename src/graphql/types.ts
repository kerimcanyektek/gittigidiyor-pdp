export interface Product {
    id: string;
    title: string;
    description: string;
    featuredImage: {
      url: string;
    };
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
  }
  
  export interface ProductsData {
    products: {
      edges: {
        node: Product;
      }[];
    };
  }
  