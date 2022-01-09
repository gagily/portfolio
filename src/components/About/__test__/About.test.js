import { render, screen } from "@testing-library/react";
import About from "../About";

const mockImage = require("../../../assets/images/prof-img.jpg");

const mockImageSkills = [
  {
    row: [
      {
        id: 1,
        icon: require("../../../assets/images/logos/html5s.svg").default,
        alt: "HTML5",
      },
    ],
  },
  {
    row: [
      {
        id: 6,
        icon: require("../../../assets/images/logos/nextjs.svg").default,
        alt: "Next",
      },
    ],
  },
];

describe("About", () => {
  it("should render text about", () => {
    render(<About profileImage={mockImage} imageSkills={mockImageSkills} />);
    const aboutElement = screen.getByText(/about/i);
    expect(aboutElement).toBeInTheDocument();
  });

  it("should render alt for profile image", () => {
    render(<About profileImage={mockImage} imageSkills={mockImageSkills} />);
    const profileImageElement = screen.getByAltText(/profile image/i);
    expect(profileImageElement).toBeInTheDocument();
  });

  it("should render alt for icon ", () => {
    render(<About profileImage={mockImage} imageSkills={mockImageSkills} />);
    const iconElement = screen.getByAltText(/HTML5/i);
    expect(iconElement).toBeInTheDocument();
  });

  it("should render alt for icon ", () => {
    render(<About profileImage={mockImage} imageSkills={mockImageSkills} />);
    const iconElement = screen.getByAltText(/HTML5/i);
    expect(iconElement).toBeInTheDocument();
  });
});
