import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

const mockIcons = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=1061064065",
      iconClass: "fa fa-facebook",
    }
]

describe("Contact", () => {
  it("should render icon name", () => {
    render(<Contact contactIcons={mockIcons} />);
    const facebookIconElement = screen.getByText(/facebook/i);
    expect(facebookIconElement).toBeInTheDocument();
  });
});
