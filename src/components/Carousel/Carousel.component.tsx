import React, { useState } from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Product } from "../../sections/dashboard/products";

export const Carousel = ({ products }: { products: Product[] }) => {
  return (
    <CCarousel
      style={{ maxWidth: 500 }}
      controls
      transition="slide"
      dark
      wrap={true}
    >
      {products.map((product) => (
        <CCarouselItem key={product.id}>
          <CImage
            rounded
            className="d-block w-100"
            height={400}
            src={product.images[0]}
            alt="slide 1"
          />
        </CCarouselItem>
      ))}
    </CCarousel>
  );
};
