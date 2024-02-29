import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home Page", () => {
    test("Should have title", () => {
        render(<Home />);
        expect(
            screen.getByText("Bienvenue sur le site de Breizh Sport")
        ).toBeDefined();
    });
});
