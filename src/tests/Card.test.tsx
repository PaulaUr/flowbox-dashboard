import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { LayoutType } from "../model/LayoutType";
import { Product } from "../sections/dashboard/products";
import Card from "../components/Card/Card.component";

const productsMock: Product[] = [
  {
    id: "13",
    title: "Recycled Concrete Computer",
    price: 461,
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    images: [
      "https://api.lorem.space/image?w=640&h=480&r=5113",
      "https://api.lorem.space/image?w=640&h=480&r=1115",
      "https://api.lorem.space/image?w=640&h=480&r=6042",
    ],
    category: {
      id: 5,
      name: "Others",
      image: "https://api.lorem.space/image?w=640&h=480&r=4967",
      creationAt: "2023-03-20T03:11:37.000Z",
      updatedAt: "2023-03-20T03:11:37.000Z",
    },
  },
  {
    id: "14",
    title: "Luxurious Plastic Keyboard",
    price: 73,
    description: "The Football Is Good For Training And Recreational Purposes",
    images: [
      "https://api.lorem.space/image/furniture?w=640&h=480&r=4855",
      "https://api.lorem.space/image/furniture?w=640&h=480&r=6701",
      "https://api.lorem.space/image/furniture?w=640&h=480&r=4914",
    ],
    category: {
      id: 3,
      name: "Furniture",
      image: "https://api.lorem.space/image/furniture?w=640&h=480&r=1380",
      creationAt: "2023-03-20T03:11:37.000Z",
      updatedAt: "2023-03-20T03:11:37.000Z",
    },
  },
];
describe("Card component", () => {
  it("Should render the Card Layout when layout prop is Card", () => {
    const props = {
      products: productsMock[0],
      layout: LayoutType.CARD,
    };
    const { getByRole, getByText } = render(
      <Card product={props.products} layout={props.layout} />
    );

    const imageInCard = getByRole("img", { name: "image" });
    const priceInCard = getByText(/461/i);
    expect(imageInCard).toBeInTheDocument();
    expect(priceInCard).toBeInTheDocument();
  });

  it("Should render only the image when layout prop is Grid", () => {
    const props = {
      products: productsMock[1],
      layout: LayoutType.GRID,
    };
    const { getByRole, queryByLabelText } = render(
      <Card product={props.products} layout={props.layout} />
    );

    const imageInCard = getByRole("img", { name: "image" });
    const titleInCard = queryByLabelText(props.products.title);

    expect(imageInCard).toBeInTheDocument();
    expect(titleInCard).not.toBeInTheDocument();
  });
});
