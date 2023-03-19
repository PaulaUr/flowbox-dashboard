import React from "react";
import { LayoutType } from "../../model/LayoutType";
import { Product } from "../../sections/dashboard/products";
import Card from "../Card/Card.component";
import { Carousel } from "../Carousel/Carousel.component";
import {
  ListContainerStyle,
  ListCardStyle,
  CarouselLayout,
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
        <CarouselLayout>
          <Carousel products={products} />
        </CarouselLayout>
      ) : (
        <ListContainerStyle layout={layout}>
          {products.map((product) => (
            <ListCardStyle key={product.id} layout={layout}>
              <Card product={product} layout={layout} />
            </ListCardStyle>
          ))}
        </ListContainerStyle>
      )}
    </>
  );
};
