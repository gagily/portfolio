import { render, screen } from "@testing-library/react";
import Portfolio from "../Portfolio";

const mockProjects = [
    {
      name: "Random quote machine",
      image: {
        src: "",
        alt: "Motivation quote",
      },
      codeUrl: "https://github.com/gagily/random-quote-machine",
      demoUrl: "https://random-quote-machine-react-app.herokuapp.com/",
    }
];

describe("Portfolio", () => {
  it("should render text portfolio", () => {
    render(<Portfolio projects={mockProjects} />);
    const portfolioElement = screen.getByText(/portfolio/i);
    expect(portfolioElement).toBeInTheDocument();
  });

  it("should render alt for project image", () => {
    render(<Portfolio projects={mockProjects} />);
    const projectImageElement = screen.getByAltText(/Motivation quote/i);
    expect(projectImageElement).toBeInTheDocument();
  });
});
