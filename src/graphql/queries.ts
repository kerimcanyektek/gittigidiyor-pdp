import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 10) {
      edges {
        node {
          id
          title
          description
          featuredImage {
            url
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;
