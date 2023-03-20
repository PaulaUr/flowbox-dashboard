import React from "react";
import { LayoutType } from "../../model/LayoutType";
import { Product } from "../../sections/dashboard/products";
import Card from "../Card/Card.component";
import { Carousel } from "../Carousel/Carousel.component";
import {
  LayoutContainerStyle,
  CardContainerStyle,
  CarouselContainerStyle,
} from "./Layout.styles";

export const Layout = ({
  products,
  layout,
}: {
  products: Product[];
  layout: LayoutType;
}) => {
  return (
    <>
      {layout === LayoutType.CAROUSEL ? (
        <CarouselContainerStyle>
          <Carousel products={products} />
        </CarouselContainerStyle>
      ) : (
        <LayoutContainerStyle aria-label="Layout container" layout={layout}>
          {products.map((product) => (
            <CardContainerStyle
              aria-label="Layout card container"
              key={product.id.toString()}
              layout={layout}
            >
              <Card product={product} layout={layout} />
            </CardContainerStyle>
          ))}
        </LayoutContainerStyle>
      )}
    </>
  );
};
