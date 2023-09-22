import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./app";

describe("App", () => {
    it("should render the App components", () => {
        render(<App />);
        expect(screen.getByRole("main")).toBeInTheDocument();
    });
});
