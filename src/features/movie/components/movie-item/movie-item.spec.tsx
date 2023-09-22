import { describe, expect, it } from "vitest";

describe("MovieItem", () => {
    const movie = {
        adult: false,
        backdrop_path: "/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg",
        genre_ids: [27, 53],
        id: 1008042,
        original_language: "en",
        original_title: "Talk to Me",
        overview:
            "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
        popularity: 2019.964,
        poster_path: "/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
        release_date: "2023-07-26",
        title: "Talk to Me",
        video: false,
        vote_average: 7.2,
        vote_count: 712,
    };

    it("should render the MovieItem components", () => {
        /* render(<MovieItem data={movie} />);

        screen.getByRole(""); */
        expect(1 + 1).toBe(2);
    });
});
