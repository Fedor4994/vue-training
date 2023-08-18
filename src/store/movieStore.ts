import type { Movie } from "@/types/movie";
import { defineStore } from "pinia";

export type MovieStore = {
  movies: Movie[];
  activeTab: number;
};

export type MovieGetters = {
  getWatchedMovies: (state: MovieStore) => Movie[];
};

export type MovieAction = {
  toggleWatched: (id: number) => void;
  deleteMovie(id: number): void;
  setActiveTab: (tab: number) => void;
};

export const useMovieStore = defineStore<
  "movieStore",
  MovieStore,
  MovieGetters,
  MovieAction
>("movieStore", {
  state: () => ({
    movies: JSON.parse(localStorage.getItem("movies")!) || [],
    activeTab: 1,
  }),
  actions: {
    toggleWatched(id) {
      const idx = this.movies.findIndex((movie) => movie.id === id);
      this.movies[idx].isWatched = !this.movies[idx].isWatched;
    },
    deleteMovie(id) {
      this.movies = this.movies.filter((movie) => movie.id !== id);
    },
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
  getters: {
    getWatchedMovies(state) {
      return state.movies.filter((movie) => movie.isWatched);
    },
  },
});
