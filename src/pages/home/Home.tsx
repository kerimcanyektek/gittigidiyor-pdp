import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/queries";
import { ProductsData } from "../../graphql/types";
import Button from "../../components/atoms/button/Button";
import Icon from "../../components/atoms/icon/Icon";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const Home = () => {
  const { loading, error, data } = useQuery<ProductsData>(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Ürün Listesi</h1>
      <ul>
        {data?.products.edges.map(({ node }) => (
          <li key={node.id} style={{ listStyle: "none", marginBottom: "20px" }}>
            <img src={node.featuredImage.url} alt={node.title} width={100} />
            <h2>{node.title}</h2>
            <p>
              {node.priceRange.minVariantPrice.amount}{" "}
              {node.priceRange.minVariantPrice.currencyCode}
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <Button variant="primary">Satın Al</Button>
              <Button variant="secondary">Sepete Ekle</Button>
              <Button variant="outline">İncele</Button>
            </div>
            {/* Ürün için ikonlar */}
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <Icon icon={FaHeart} size={20} color="red" />
              <Icon icon={FaShoppingCart} size={20} color="#007bff" />
              <Icon icon={FaStar} size={20} color="gold" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
