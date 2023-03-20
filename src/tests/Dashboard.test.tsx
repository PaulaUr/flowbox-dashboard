import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import Dashboard from "../sections/dashboard/Dashboard";
import { renderWithProviders } from "./utils/test-utils";
import { ProductsState } from "../slices";

describe("Dashboard component", () => {
  it("Should render Loading component when the initialState is empty array and status is loading", () => {
    const initialState: ProductsState = {
      status: "loading",
      error: null,
      products: [],
    };

    const { getByText } = renderWithProviders(<Dashboard />, {
      preloadedState: { products: initialState },
    });
    const loadingElement = getByText("Loading");
    const dashboardElement = screen.queryByTestId("Dashboard-component");

    expect(loadingElement).toBeInTheDocument();
    expect(dashboardElement).not.toBeInTheDocument();
  });

  it("Should render Dashboard component when there are data in store", () => {
    renderWithProviders(<Dashboard />);
    const dashboardElement = screen.getByTestId("Dashboard-component");

    expect(dashboardElement).toBeInTheDocument();
  });

  it("Should render the icon buttons and click on Card icon", () => {
    renderWithProviders(<Dashboard />);

    const cardIconButton = screen.getByTestId("card-icon");
    const slideIconButton = screen.getByTestId("slide-icon");
    userEvent.click(cardIconButton);

    expect(cardIconButton).toBeInTheDocument();
    expect(slideIconButton).toBeInTheDocument();
    expect(cardIconButton).toHaveStyle("background-color: rgba(246,95,13,1)");
    expect(slideIconButton).toHaveStyle("background-color: transparent");
  });
});
