import ProductImageGallery from "../../components/molecules/product-image-gallery/ProductImageGallery";

const ProductPage = () => {
  const images = [
    "https://via.placeholder.com/400", 
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100"
  ];

  return (
    <div>
      <h1>Ürün Detayı</h1>
      <ProductImageGallery images={images} />
    </div>
  );
};

export default ProductPage;
