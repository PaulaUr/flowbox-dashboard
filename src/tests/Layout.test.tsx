import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";

import { Layout } from "../components/Layout/Layout.component";
import { LayoutType } from "../model/LayoutType";
import { Product } from "../sections/dashboard/products";

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
describe("Layout component", () => {
  it("Should render only the container Layout when  layout  prop is  Card and without children", () => {
    const props = {
      products: [],
      layout: LayoutType.CARD,
    };
    const { container, queryAllByLabelText } = render(
      <Layout products={props.products} layout={props.layout} />
    );

    const layoutCardElement = queryAllByLabelText("Layout card container");

    expect(container.firstChild).toHaveStyle(`grid-auto-rows: "22rem"`);
    //expect(container.firstChild).toHaveStyle("grid-auto-rows: 22rem");
    expect(layoutCardElement).toHaveLength(0);
  });

  it("Should render the Card Layout when there are products and layout prop is Card", () => {
    const props = {
      products: productsMock,
      layout: LayoutType.CARD,
    };
    const { container, getAllByLabelText } = render(
      <Layout products={props.products} layout={props.layout} />
    );

    const layoutCardElement = getAllByLabelText("Layout card container");

    expect(container.firstChild).toHaveStyle(`grid-auto-rows: "22rem"`);
    expect(layoutCardElement).toHaveLength(2);
  });

  it("Should render the List Layout when  layout  prop is  List", () => {
    const props = {
      products: productsMock,
      layout: LayoutType.LIST,
    };
    const { container } = render(
      <Layout products={props.products} layout={props.layout} />
    );

    expect(container.firstChild).toHaveStyle(
      "grid-auto-rows: minmax(auto, 300px)"
    );
  });

  it("Should render the Carousel Layout when  layout  prop is  Carousel", () => {
    const props = {
      products: productsMock,
      layout: LayoutType.CAROUSEL,
    };
    const { container, getByLabelText } = render(
      <Layout products={props.products} layout={props.layout} />
    );

    const buttonPreviousCarousel = getByLabelText("prev");

    expect(container.firstChild).toHaveStyle("display: flex");
    expect(buttonPreviousCarousel).toBeInTheDocument();
  });
});
