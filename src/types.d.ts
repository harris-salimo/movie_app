import { TMovie } from "./features/movie/types";

export type TAPIResponse = {
    dates: {
        maximum: string;
        minimum: string;
    };
    page: number;
    results: TMovie[];
    total_pages: number;
    total_results: number;
};
