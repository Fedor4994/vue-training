import type { Movie } from "@/types/movie";
import { defineStore } from "pinia";
import { useMovieStore } from "./movieStore";

const url =
  "https:api.themoviedb.org/3/search/movie?api_key=abf5df7d75a67bd02b3b1e4ead1fc14d&query=";

export type SearchStore = {
  movies: Movie[];
  isLoading: boolean;
};

export type SearchAction = {
  getMovies: (query: string) => void;
  addMovieToWatchlist: (movie: Movie) => void;
};

export const useSearchStore = defineStore<
  "searchStore",
  SearchStore,
  {},
  SearchAction
>("searchStore", {
  state: () => ({
    movies: [],
    isLoading: false,
  }),
  actions: {
    async getMovies(query) {
      this.isLoading = true;
      const res = await fetch(`${url}${query}`);
      const data = await res.json();
      this.movies = data.results;
      this.isLoading = false;
    },
    addMovieToWatchlist({
      id,
      original_title,
      overview,
      poster_path,
      release_date,
    }) {
      const movieStore = useMovieStore();
      movieStore.movies.push({
        id,
        original_title,
        overview,
        poster_path,
        release_date,
        isWatched: false,
      });

      movieStore.activeTab = 1;
    },
  },
});
