import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/queries";
import { ProductsData } from "../../graphql/types";

const Home = () => {
  const { loading, error, data } = useQuery<ProductsData>(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Ürün Listesi</h1>
      <ul>
        {data?.products.edges.map(({ node }) => (
          <li key={node.id}>
            <img src={node.featuredImage.url} alt={node.title} width={100} />
            <h2>{node.title}</h2>
            <p>{node.priceRange.minVariantPrice.amount} {node.priceRange.minVariantPrice.currencyCode}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
