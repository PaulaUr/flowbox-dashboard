import React, { useState } from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Product } from "../../sections/dashboard/products";
import Card from "../Card/Card.component";

export const Carousel = ({ products }: { products: Product[] }) => {
  return (
    <CCarousel style={{ maxWidth: 500 }} controls transition="slide">
      {products.map((product) => (
        <CCarouselItem key={product.id}>
          <CImage
            className="d-block w-100"
            src={product.images[0]}
            alt="slide 1"
          />
        </CCarouselItem>
      ))}
    </CCarousel>
  );
};
