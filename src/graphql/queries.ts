import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 10) {
      edges {
        node {
          id
          title
          featuredImage {
            url
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {  # Ürüne ait ilk 5 resmi alıyoruz
            edges {
              node {
                url
              }
            }
          }
        }
      }
    }
  }
`;
