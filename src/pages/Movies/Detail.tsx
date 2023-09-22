import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMovie } from "../../api/movie";

const Detail = () => {
    const { movieId } = useParams();
    const { data: movie } = useQuery({
        queryKey: ["movies", "detail", movieId],
        queryFn: async () => {
            const movie = await getMovie(Number(movieId));
            if (!movie) {
                throw new Response("", {
                    status: 404,
                    statusText: "Not Found",
                });
            }
            return movie;
        },
    });

    return (
        <div className="flex flex-col gap-y-3">
            <div className="relative p-3 col-start-1 row-start-1 flex justify-center">
                <h1 className="mt-1 text-lg font-semibold md:text-2xl">
                    {movie.title}
                </h1>
            </div>
            <div className="flex-none h-80 relative">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
            <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                <dt className="sr-only">Reviews</dt>
                <dd className="text-teal-400 flex items-center dark:text-teal-400">
                    <svg
                        width="24"
                        height="24"
                        fill="none"
                        aria-hidden="true"
                        className="mr-1 stroke-current dark:stroke-teal-400"
                    >
                        <path
                            d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span>
                        {movie.vote_average}{" "}
                        <span className="text-slate-400 font-normal">
                            ({movie.vote_count})
                        </span>
                    </span>
                </dd>
                <dt className="sr-only">Location</dt>
                <dd className="flex items-center">
                    <svg
                        width="2"
                        height="2"
                        aria-hidden="true"
                        fill="currentColor"
                        className="mx-3 text-slate-300"
                    >
                        <circle cx="1" cy="1" r="1" />
                    </svg>
                    <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1 text-teal-400"
                        aria-hidden="true"
                    >
                        <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                        <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                    </svg>
                    {movie.production_countries
                        .map((prodCountry: Record<string, any>) => prodCountry.name)
                        .join(", ")}
                </dd>
            </dl>
            {movie.status !== "Released" && (
                <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                    <button
                        type="button"
                        className="bg-teal-400 text-white text-sm leading-6 font-medium py-2 px-3"
                    >
                        Check availability
                    </button>
                </div>
            )}
            <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                {movie.overview}
            </p>
        </div>
    );
};

export default Detail;
