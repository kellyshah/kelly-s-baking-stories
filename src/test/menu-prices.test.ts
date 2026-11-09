import { describe, expect, it } from "vitest";
import { fullMenu } from "@/pages/MenuPage";

const sectionItems = (sectionName: string) => {
  const section = fullMenu.find(({ section }) => section === sectionName);
  if (!section) throw new Error(`Missing menu section: ${sectionName}`);
  return Object.fromEntries(section.items.map(({ name, price }) => [name, price]));
};

describe("latest posted menu prices", () => {
  it("uses the updated 500g exotic cake prices", () => {
    expect(sectionItems("Exotic Cakes")).toMatchObject({
      Gianduja: "₹1,099",
      "Chocolate Truffle": "₹1,027",
      "Dark Chocolate Salted Caramel": "₹987",
      "Mocha Frappe Cake": "₹973",
      "Hazelnut Praline Dark Chocolate": "₹1,419",
      Biscoff: "₹1,099",
      "Swiss Chocolate": "₹897",
      "Red Velvet": "₹897",
    });
  });

  it("uses the updated 500g signature cake prices", () => {
    expect(sectionItems("Signature Cakes")).toMatchObject({
      "Pistachio White Chocolate": "₹1,099",
      "Rose Pistachio": "₹1,099",
      "Mango Madness": "₹947",
      Tiramisu: "₹1,097",
      "Lemon Curd": "₹987",
      "Vanilla Salted Caramel": "₹847",
      Pineapple: "₹947",
      "Hazelnut Crunch": "₹1,419",
      "Classic Vanilla": "₹847",
      "Strawberry Hibiscus": "₹979",
      "Vanilla Praline": "₹943",
    });
  });

  it("uses the updated per-piece brownie and cupcake prices", () => {
    expect(sectionItems("Brownies")).toMatchObject({
      "Double Chocolate": "₹129",
      "Walnut Brownie": "₹145",
      "Salted Caramel Brownie": "₹129",
      "Biscoff Brownie": "₹145",
    });
    expect(sectionItems("Cupcakes")).toMatchObject({
      "Swiss Chocolate": "₹120",
      "Classic Vanilla": "₹110",
      "Red Velvet": "₹110",
      Pineapple: "₹125",
      "Seasonal Fruit": "₹130",
    });
  });

  it("uses the updated 300g cheesecake prices", () => {
    expect(sectionItems("Cheesecakes")).toMatchObject({
      Nutella: "₹799",
      Biscoff: "₹849",
      Blueberry: "₹699",
      "Salted Caramel": "₹699",
      "Seasonal Fruit": "₹699",
      Strawberry: "₹699",
    });
  });

  it("keeps the existing separate macaron menu and prices unchanged", () => {
    expect(sectionItems("Eggless Vegan Macarons")).toEqual({
      "Loaded Chocolate": "₹490",
      "Pistachio Hazelnut": "₹510",
      "Tangy Lemon": "₹490",
      "Salted Caramel": "₹490",
      Tiramisu: "₹490",
      "Birthday Cake": "₹490",
      "Rose Pistachio": "₹510",
      Gianduja: "₹510",
      Blueberry: "₹520",
    });
  });

  it("does not invent prices for items unpriced in the PDF", () => {
    expect(sectionItems("Cookies")).toEqual({
      "Oatmeal Cookies": undefined,
      "Butter Cookies": undefined,
      "Sandwich Cookies": undefined,
      "Chocolate Chips Cookies": undefined,
    });
    expect(sectionItems("Jar Cakes")).toEqual({
      "Dark Chocolate Salted Caramel": undefined,
      Blueberry: undefined,
      "Lemon Curd": undefined,
      "Swiss Chocolate": undefined,
      "Hazelnut Dark Chocolate": undefined,
      "Pistachio White Chocolate": undefined,
      "White Chocolate": undefined,
    });
  });
});