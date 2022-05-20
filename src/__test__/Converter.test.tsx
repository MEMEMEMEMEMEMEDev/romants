import { Converter } from "../components/Converter/Converter";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Pruebas del componente Converter", () => {
  beforeEach(() => {
    // eslint-disable-next-line
    render(<Converter />);
  });

  it("Debe mostrar el botón de convertir", () => {
    // Arrange
    const button = screen.getByText("Convert");
    // Act & Assert
    expect(button).toBeInTheDocument();
  });

  it("Debe mostrar el input", () => {
    // Arrange
    const input = screen.getByPlaceholderText("Enter a number");
    // Act & Assert
    expect(input).toBeInTheDocument();
  });

  it("Comprobar resultado", async () => {
    // Arrange
    const input = screen.getByPlaceholderText("Enter a number");
    const button = screen.getByText("Convert");
    // Act
    fireEvent.change(input, { target: { value: "1" } });
    fireEvent.click(button);
    // Assert
    await screen.findByText("I");
  });

  it("Probar el error", async () => {
    // Arrange
    const input = screen.getByPlaceholderText("Enter a number");
    const button = screen.getByText("Convert");
    // Act
    fireEvent.change(input, { target: { value: "a" } });
    fireEvent.click(button);
    // Assert
    await screen.findByText("Please enter a number");
  });
});
