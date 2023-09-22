import { ReactNode } from "react";

interface TabProps {
    children: ReactNode;
}

const TabList = ({ children }: TabProps) => {
    return (
        <nav className="tab">
            <ul className="tab-list">{children}</ul>
        </nav>
    );
};

export default TabList;
