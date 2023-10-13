<template>
  <Mainlayout>
    <h2 class="text-xl capitalize mb-3 ml-7 text-purple-600"> discover new movies :</h2>
      <Loading v-if="$MoviesStore.isLoadig" />  
    <keep-alive v-else>
      <div  class="grid gap-x-2 justify-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          <Movie v-for="Movie in $MoviesStore.movies" :key="Movie.id" :id="Movie.id" :title="Movie.title"
              :vote_average="Movie.vote_average" :poster_path="Movie.poster_path" />
      </div>
    </keep-alive>
    
  </Mainlayout>
</template>

<script setup lang="ts">
import Mainlayout from '../layouts/Mainlayout.vue';
const route = useRoute().name;
const { $MoviesStore } = useNuxtApp();
const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/discover/movie',
  params: {
    include_adult: 'false',
    include_video: 'false',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: process.env.apiauth,
  }
};
onBeforeMount(async() => {
  await $MoviesStore.fetchmovies(options);
}),
useSeoMeta({
  title: `${route}`,
  ogTitle: `${route}`,
  description: 'all movies in one place',
  ogDescription: 'all movies in one place',
})
</script>