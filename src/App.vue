<script setup lang="ts">
import { computed } from "vue";
import Movie from "./components/Movie.vue";
import { useMovieStore } from "./store/movieStore";

const movieStore = useMovieStore();

const isFavoriteTab = computed(() => {
  return movieStore.activeTab === 1;
});
</script>

<template>
  <main>
    <header class="header">
      <img src="./assets/logo.svg" alt="logo" class="header-logo" />
      <h2>My Favorite Movies</h2>
    </header>
    <div class="tabs">
      <button :class="['btn', { btn_green: isFavoriteTab }]">Favorite</button>
      <button :class="['btn', { btn_green: !isFavoriteTab }]">Search</button>
    </div>
    <div class="movies" v-if="isFavoriteTab">
      <h3>All Movies</h3>
      <Movie
        v-for="movie in movieStore.movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <div class="search" v-else>Search</div>
  </main>
</template>

<style lang="css">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.header-logo {
  max-width: 50px;
  margin-right: 10px;
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}
.btn:hover {
  opacity: 0.7;
}
.btn_green {
  background: #37df5c;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
./store/movieStore
