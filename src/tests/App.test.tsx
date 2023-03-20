import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import App from "../App";

import { renderWithProviders } from "./utils/test-utils";

describe("App component", () => {
  it("Should render FlowboxLogo component and title", () => {
    renderWithProviders(<App />);
    const headerElement = screen.getByText("Photoslurp");
    const flowboxLogoElement = screen.getByTitle("Flowbox logo");

    expect(headerElement).toBeInTheDocument();
    expect(flowboxLogoElement).toBeInTheDocument();
  });
});
