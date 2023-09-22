import { ReactNode } from "react";
import "./tab-item.css";

interface TabItemProps {
    isActive?: boolean;
    children: ReactNode;
    onClick?: () => void;
}

const TabItem = ({ isActive, children, onClick }: TabItemProps) => {
    return (
        <li
            className={`tab-item ${isActive ? "active" : ""}`}
            onClick={(e) => {
                e.preventDefault();
                onClick?.();
            }}
        >
            {children}
        </li>
    );
};

export default TabItem;
