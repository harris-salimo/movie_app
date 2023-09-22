import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import TabItem from "./tab-item";

describe("TabItem", () => {
    it("should render the TabItem components", () => {
        render(<TabItem children="Test TabItem" />);

        const tabItem = screen.getByRole("listitem");

        expect(tabItem).toHaveClass("tab-item");
        expect(tabItem).toHaveTextContent("Test TabItem");
    });

    it("should render the TabItem with 'active' class when active", () => {
        render(<TabItem children="Test TabItem" isActive />);

        expect(screen.getByRole("listitem")).toHaveClass("active");
    });

    it("should call the onClick callback handler", () => {
        const onClick = vi.fn();
        render(<TabItem children="Test TabItem" onClick={onClick} />);

        fireEvent.click(screen.getByRole("listitem"));

        expect(onClick).toHaveBeenCalledOnce();
    });
});
