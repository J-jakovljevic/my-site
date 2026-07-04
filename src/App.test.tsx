import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "@/App";

it("renders the home page", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const heading = screen.getByRole("heading", {
    name: /engineering products/i,
    level: 1,
  });

  expect(heading).toBeTruthy();
});
