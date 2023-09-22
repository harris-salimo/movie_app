import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getMovies } from "../api/movie";
import { Tab, TabItem } from "../components/tab";
import { MovieItem, MovieList } from "../features/movie";
import { TAPIResponse } from "../types";

const TAB_ITEMS: Array<{
    id: number;
    href: "upcoming" | "popular" | "top_rated";
    text: string;
}> = [
    { id: 0, href: "upcoming", text: "Upcoming" },
    { id: 1, href: "popular", text: "Popular" },
    { id: 2, href: "top_rated", text: "Top Rated" },
];

const Home = () => {
    const queryClient = useQueryClient();
    const [activeTab, setActiveTab] = useState(TAB_ITEMS[0]);
    const [page, setPage] = useState(1);
    const { data, isPreviousData } = useQuery<TAPIResponse>({
        queryKey: ["movies", page],
        queryFn: () => getMovies({ category: activeTab.href, page }),
    });

    useEffect(() => {
        if (!isPreviousData) {
            queryClient.prefetchQuery({
                queryKey: ["projects", page + 1],
                queryFn: () =>
                    getMovies({ category: activeTab.href, page: page + 1 }),
            });
        }
    }, [activeTab, isPreviousData, page, queryClient]);

    const handlePageChange = (selectedItem: { selected: number }) => {
        setPage(selectedItem.selected);
    };

    return (
        <>
            <h1 className="text-2xl font-semibold text-center">Movie App</h1>

            <Tab>
                {TAB_ITEMS.map((tabItem) => (
                    <TabItem
                        key={tabItem.id}
                        isActive={activeTab.id === tabItem.id}
                        onClick={() => setActiveTab(tabItem)}
                    >
                        {tabItem.text}
                    </TabItem>
                ))}
            </Tab>

            <MovieList
                page_count={data?.total_pages}
                onPageChange={handlePageChange}
            >
                {data?.results?.map((movie) => (
                    <MovieItem key={movie.id} data={movie} />
                ))}
            </MovieList>
        </>
    );
};

export default Home;
