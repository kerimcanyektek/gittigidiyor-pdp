import React, { useState } from "react";
import {
  GalleryContainer,
  MainImage,
  ThumbnailContainer,
  Thumbnail,
} from "./ProductImageGallery.styles";

interface ProductImageGalleryProps {
  images: string[];
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[3]);

  return (
    <GalleryContainer>
      <MainImage src={selectedImage} alt="Selected Product" />
      <ThumbnailContainer>
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => setSelectedImage(image)}
            isActive={selectedImage === image}
          />
        ))}
      </ThumbnailContainer>
    </GalleryContainer>
  );
};

export default ProductImageGallery;
