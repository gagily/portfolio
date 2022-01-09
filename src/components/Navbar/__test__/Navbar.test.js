import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("should render about link", () => {
    render(<Navbar logo="" />);
    const aboutLink = screen.getByText(/about/i);
    expect(aboutLink).toBeInTheDocument();
  });

  it("should render portfolio link", () => {
    render(<Navbar logo="" />);
    const portfolioLink = screen.getByText(/portfolio/i);
    expect(portfolioLink).toBeInTheDocument();
  });

  it("should render contact link", () => {
    render(<Navbar logo="" />);
    const contactLink = screen.getByText(/contact/i);
    expect(contactLink).toBeInTheDocument();
  });
});
