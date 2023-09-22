import { ReactNode } from "react";
import ReactPaginate from "react-paginate";

interface MovieListProps {
    children: ReactNode;
    page_count?: number;
    onPageChange?: (selectedItem: { selected: number }) => void;
}

const MovieList = ({
    page_count = 1,
    children,
    onPageChange,
}: MovieListProps) => {
    return (
        <>
            <ul className="divide-y divide-slate-100">{children}</ul>

            <div className="flex justify-center">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                            />
                        </svg>
                    }
                    previousLabel={
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                clipRule="evenodd"
                            />
                        </svg>
                    }
                    containerClassName="inline-flex -space-x-px"
                    nextLinkClassName="inline-flex items-center px-2 py-2 text-gray-900 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    previousLinkClassName="inline-flex items-center px-2 py-2 text-gray-900 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    pageLinkClassName="inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    activeLinkClassName="bg-teal-400 text-white hover:bg-teal-400"
                    breakLinkClassName="inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 focus:outline-offset-0"
                    disabledLinkClassName="text-gray-400"
                    initialPage={1}
                    pageCount={page_count}
                    marginPagesDisplayed={3}
                    renderOnZeroPageCount={null}
                    onPageChange={onPageChange}
                />
            </div>
        </>
    );
};

export default MovieList;
