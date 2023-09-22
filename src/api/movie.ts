import axios from 'axios';

export async function getMovies({
    category,
    page,
}: {
    category: "upcoming" | "popular" | "top_rated";
    page?: number;
}) {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${category}?api_key=${
            import.meta.env.VITE_THEMOVIEDB_API_KEY
        }${!page || page < 1 ? "" : "&page=" + page}`
    );
    return response.data ?? null;
}

export async function getMovie(movieId: number) {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
            import.meta.env.VITE_THEMOVIEDB_API_KEY
        }`
    );
    return response.data ?? null;
}