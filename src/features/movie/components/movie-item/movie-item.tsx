import { Link } from "react-router-dom";
import { TMovie } from "../../types";

interface MovieItemProps {
    data: TMovie;
}

const MovieItem = ({ data }: MovieItemProps) => {
    return (
        <li>
            <article className="flex items-start space-x-6 p-6">
                <div className="flex-none w-16 h-20 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={`${data.title}'s poster image`}
                        className="absolute z-10 inset-0 w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
                <div className="min-w-0 relative flex-auto">
                    <h2 className="font-semibold text-slate-900 truncate pr-20">
                        <Link to={`movies/${data.id}`}>{data.title}</Link>
                    </h2>
                    <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                        <div className="absolute top-0 right-0 flex items-center space-x-1">
                            <dt className="text-teal-400">
                                <span className="sr-only">Vote average</span>
                                <svg width="16" height="20" fill="currentColor">
                                    <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                                </svg>
                            </dt>
                            <dd>{data.vote_average}</dd>
                        </div>
                        <div>
                            <dt className="sr-only">Vote count</dt>
                            <dd className="px-1.5 border border-slate-200">
                                {data.vote_count}
                            </dd>
                        </div>
                        {data.release_date && (
                            <div className="ml-2">
                                <dt className="sr-only">Year</dt>
                                <dd>
                                    {new Date(
                                        data.release_date
                                    ).toLocaleDateString()}
                                </dd>
                            </div>
                        )}
                    </dl>
                </div>
            </article>
        </li>
    );
};

export default MovieItem;
