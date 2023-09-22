import { ReactNode } from "react";

interface TabProps {
    children: ReactNode
}
 
const Tab = ({ children }: TabProps) => {
    return (
        <nav className="py-4 px-6 text-sm font-medium">
            <ul className="flex flex-col gap-y-3 sm:flex-row sm:gap-x-3">{children}</ul>
        </nav>
    );
}
 
export default Tab;