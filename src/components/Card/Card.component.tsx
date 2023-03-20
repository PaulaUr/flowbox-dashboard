import React, { useEffect, useState } from "react";
import noImage from "../../assets/noImage.png";
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

const urlRegex =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

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

  const validImageUrl = (urlValue: string) => urlRegex.test(urlValue);

  return (
    <React.Fragment>
      <CardImgWrapperStyle
        aria-label="Card image wrapper"
        layout={props.layout}
      >
        <CardImgStyle
          aria-label="image"
          alt="robots"
          src={validImageUrl(images[0]) ? images[0] : noImage}
          layout={props.layout}
        />
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
