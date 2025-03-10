import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/queries";
import { ProductsData } from "../../graphql/types";
import ProductInfoContainer from "../../components/organisms/product-info-container/ProductInfoContainer";
import ProductImageGallery from "../../components/molecules/product-image-gallery/ProductImageGallery";
import { ProductDetailWrapper } from "../../components/organisms/product-info-container/ProductInfoContainer.styles";

const Home = () => {
  const { loading, error, data } = useQuery<ProductsData>(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const productImages = data?.products.edges[2]?.node.images.edges.map(
    (image) => image.node.url
  );

  const customProduct = {
    title: "Hummel Basic T-Shirt",
    price: "3.299,00 TL",
    currency: "",
    description:
      "Yüksek kaliteli, konforlu ve şık tasarımıyla her ortamda rahatlıkla giyebileceğiniz rahat bir t-shirt.",
    rating: 4.5,
    reviewCount: 150,
  };

  return (
    <div className="home-wrapper">
      <ProductDetailWrapper>
        {/* Product Images */}
        {productImages && <ProductImageGallery images={productImages} />}

        {/* Product Details */}
        <ProductInfoContainer
          title={customProduct.title}
          price={customProduct.price}
          currency={customProduct.currency}
          description={customProduct.description}
          rating={customProduct.rating}
          reviewCount={customProduct.reviewCount}
        />
      </ProductDetailWrapper>
    </div>
  );
};

export default Home;
