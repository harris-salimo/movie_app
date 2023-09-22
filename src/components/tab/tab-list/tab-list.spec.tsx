import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TabItem } from "..";
import TabList from "./tab-list";

describe("TabList", () => {
    it("should render the TabList components", () => {
        render(<TabList children="Test TabList" />);

        const tabNavigation = screen.getByRole("navigation");
        const tabList = screen.getByRole("list");

        expect(tabNavigation).toHaveClass("tab");
        expect(tabNavigation).toContainElement(tabList);
        expect(tabList).toHaveClass("tab-list");
    });

    it("should render the TabList with 3 TabItem", () => {
        render(
            <TabList
                children={
                    <>
                        <TabItem children="Tab 1" />
                        <TabItem children="Tab 2" />
                        <TabItem children="Tab 3" />
                    </>
                }
            />
        );

        expect(screen.getAllByRole("listitem")).toHaveLength(3);
    });
});
