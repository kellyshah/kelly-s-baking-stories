import { render, screen } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import Contact from "@/pages/Contact";

describe("bakery contact address", () => {
  it("shows the confirmed address and PIN on the contact page", () => {
    render(<Contact />);
    expect(screen.getByText("Savita Govind Plaza, Bodakdev, Ahmedabad 380054")).toBeInTheDocument();
  });

  it("includes the confirmed street address and PIN in local-business structured data", () => {
    const prerenderConfig = readFileSync("scripts/prerender.js", "utf8");
    expect(prerenderConfig).toContain('"streetAddress": "Savita Govind Plaza, Bodakdev"');
    expect(prerenderConfig).toContain('"postalCode": "380054"');
  });
});