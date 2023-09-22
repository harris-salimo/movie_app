import { ReactNode } from "react";

interface TabItemProps {
    href?: string;
    isActive?: boolean;
    children: ReactNode;
    onClick?: () => void;
}
 
const TabItem = ({ href, isActive, children, onClick }: TabItemProps) => {
    return (
        <li>
            <a
                href={href}
                className={`block px-3 py-2 uppercase tracking-wider cursor-pointer ${
                    isActive
                        ? "border-2 border-black bg-teal-400 text-white"
                        : "border border-slate-200 bg-slate-50"
                }`}
                onClick={(e) => {
                    e.preventDefault();
                    onClick?.();
                }}
            >
                {children}
            </a>
        </li>
    );
};
 
export default TabItem;