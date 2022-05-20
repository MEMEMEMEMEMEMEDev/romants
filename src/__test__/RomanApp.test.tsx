import { render, screen } from "@testing-library/react";
import RomanApp from "../RomanApp";

describe("RomanApp test principals", () => {
  beforeEach(() => {
    // eslint-disable-next-line
    render(<RomanApp />);
  });

  it("should render the app title", () => {
    // Arrange
    const title = screen.getByText("Convert to roman numbers");
    // Act & Assert
    expect(title).toBeInTheDocument();
  });
});
