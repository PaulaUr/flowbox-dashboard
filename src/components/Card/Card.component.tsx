import React, { useEffect, useState } from "react";
import { Product } from "../../sections/dashboard/products";
import {
  CardImgWrapperStyle,
  CardImgStyle,
  CardBodyStyle,
  CardTitleStyle,
  CardDescriptionStyle,
  CardPriceStyle,
} from "./Card.styles";

type bodyDependingOnLayoutType = {
  [key: string]: boolean;
};

interface CardProps {
  product: Product;
  layout: string;
}

function Card(props: CardProps) {
  const { title, price, description, images } = props.product;
  const [showBody, setShowBody] = useState<boolean>(true);

  useEffect(() => {
    const showBodyDependingOnLayout: bodyDependingOnLayoutType = {
      GRID: false,
      CARD: true,
      LIST: true,
      CAROUSEL: false,
    };

    setShowBody(showBodyDependingOnLayout[props.layout]);
  }, [props.layout]);

  return (
    <React.Fragment>
      <CardImgWrapperStyle layout={props.layout}>
        <CardImgStyle alt="robots" src={images[0]} layout={props.layout} />
      </CardImgWrapperStyle>
      {showBody && (
        <CardBodyStyle layout={props.layout}>
          <CardTitleStyle> {title}</CardTitleStyle>
          <CardDescriptionStyle>{description}</CardDescriptionStyle>
          <CardPriceStyle>{price} EUR</CardPriceStyle>
        </CardBodyStyle>
      )}
    </React.Fragment>
  );
}

export default Card;
