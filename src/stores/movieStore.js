// Utilities
import axios from "axios";
import { defineStore } from "pinia";

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const useMovieStore = defineStore("movieStore", {
    state: () => ({
        movies: [],
        popularMovies: [],
        popularSeries: [],
        error: null,
        loading: false,
    }),
    actions: {
        async fetchMovies(title, category, type) {
            this.loading = true;
            this.error = null;

            try {
                // await delay(1000);
                const response = await axios.get(
                    `${import.meta.env.VITE_OMDB_API_URL}`,
                    {
                        params: {
                            apiKey: import.meta.env.VITE_OMDB_API_KEY,
                            s: title,
                            type: type,
                        },
                    }
                );

                if (response.data.Response === "True") {
                    this[category] = response.data.Search.slice(0, 4);
                } else {
                    this.error = response.data.Error;
                }
            } catch (error) {
                this.error = response.data.Error;
            } finally {
                this.loading = false;
            }
        },
    },
});
