import { defineStore } from "pinia";
import { fetchFromOMDB } from "@/services/apiService";
import { getWatchlist } from "@/services/watchlistService";

export const useMovieStore = defineStore("movieStore", {
    state: () => ({
        searchedMovies: [],
        searchedMoviesCount: 0,
        popularMovies: [],
        popularSeries: [],
        movieDetails: {},
        error: null,
        errorInfo: null,
        loading: false,
        allMoviesByYear: [],
        watchlistMovies: [],
        watchlistMoviesCount: 0,
    }),
    actions: {
        async handleAsyncOperation(asyncFn) {
            try {
                return await asyncFn();
            } catch (error) {
                this.error =
                    error.message || "An error occurred. Please try again.";
            } finally {
                this.loading = false;
            }
        },
        async fetchMovies(title, category, type) {
            this.reset();

            await this.handleAsyncOperation(async () => {
                const response = await fetchFromOMDB({
                    s: title,
                    type: type,
                });

                if (response.data.Response === "True") {
                    this[category] = response.data.Search.slice(0, 4);
                } else {
                    this.errorInfo = response.data.Error;
                }
            });
        },
        async searchMovies(currentPage, title, type) {
            this.reset();

            if (currentPage == 1) {
                this.searchedMovies = [];
            }

            this.searchedMoviesCount = 0;

            await this.handleAsyncOperation(async () => {
                const response = await fetchFromOMDB({
                    s: title,
                    type: type,
                    page: currentPage,
                });

                if (response.data.Response === "True") {
                    if (currentPage == 1) {
                        this.searchedMovies = response.data.Search;
                    } else {
                        this.searchedMovies.push(...response.data.Search);
                    }

                    this.selectFirstMovie();

                    this.searchedMoviesCount = parseInt(
                        response.data.totalResults
                    );
                } else {
                    this.errorInfo = response.data.Error;
                }
            });
        },
        async searchMoviesByYear(currentPage, title, type, startYear, endYear) {
            this.reset();
            this.searchedMovies = [];
            this.searchedMoviesCount = 0;
            this.allMoviesByYear = [];

            await this.handleAsyncOperation(async () => {
                const yearPromises = [];
                for (let year = startYear; year <= endYear; year++) {
                    yearPromises.push(
                        fetchFromOMDB({
                            s: title,
                            type: type,
                            y: year,
                        })
                    );
                }

                const responses = await Promise.all(yearPromises);

                responses.forEach((response) => {
                    if (response.data.Response === "True") {
                        this.allMoviesByYear.push(...response.data.Search);
                    }
                });

                this.searchedMoviesCount = this.allMoviesByYear.length;
                this.updateMoviesForPage(currentPage);
            });
        },
        async fetchMovieDetails(imdb) {
            this.reset();
            this.movieDetails = {};

            await this.handleAsyncOperation(async () => {
                const response = await fetchFromOMDB({
                    i: imdb,
                    plot: "full",
                });

                if (response.data.Response === "True") {
                    this.movieDetails = response.data;
                } else {
                    this.errorInfo = response.data.Error;
                }
            });
        },
        selectFirstMovie() {
            if (Object.keys(this.movieDetails).length === 0) {
                this.fetchMovieDetails(this.searchedMovies[0].imdbID);
            }
        },
        reset() {
            this.loading = true;
            this.error = null;
            this.errorInfo = null;
        },
        updateMoviesForPage(currentPage) {
            const start = (currentPage - 1) * 10;
            const end = currentPage * 10;

            if (currentPage == 1) {
                this.searchedMovies = this.allMoviesByYear.slice(start, end);
            } else {
                this.searchedMovies.push(
                    ...this.allMoviesByYear.slice(start, end)
                );
            }

            this.selectFirstMovie();
        },
        async fetchWatchlistMovies() {
            this.reset();
            this.watchlistMovies = [];
            this.watchlistMoviesCount = 0;
            let imdbList = getWatchlist();

            await this.handleAsyncOperation(async () => {
                const watchlistMoviesPromises = [];
                imdbList.reverse().forEach((imdb) => {
                    watchlistMoviesPromises.push(
                        fetchFromOMDB({
                            i: imdb,
                        })
                    );
                });

                const responses = await Promise.all(watchlistMoviesPromises);

                responses.forEach((response) => {
                    if (response.data.Response === "True") {
                        this.watchlistMovies.push(response.data);
                    }
                });

                this.searchedMoviesCount = imdbList.length;
            });
        },
    },
});
