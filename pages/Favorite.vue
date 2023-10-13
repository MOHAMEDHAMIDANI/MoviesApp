<template>
    <Mainlayout>
        <h2 class="text-xl capitalize mb-3 ml-7 text-purple-600" v-if="$MoviesStore.isLoadig"> Your favorite stuff :</h2>
        <h2 class="text-xl capitalize mb-3 ml-7 text-purple-600" v-else> you have to like some thing to appeare here </h2>
        
        <div class="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            <Movie v-for="Movie in $MoviesStore.favoriteInfo" :key="Movie.id" :id="Movie.id" :title="Movie.title"
                :vote_average="Movie.vote_average" :poster_path="Movie.poster_path" />
        </div>
    </Mainlayout>
</template>
<script setup lang="ts">
import Mainlayout from '../layouts/Mainlayout.vue';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: process.env.apiauth,
    }
};
const { $MoviesStore } = useNuxtApp();
onBeforeMount(async () => {
    await $MoviesStore.fetchfavorite(options)
}),
const route = useRoute().name;
useSeoMeta({
  title: `${route}`,
  ogTitle: 'save your favorite movies and series in one place',
  description: 'save your favorite movies and series in one place',
  ogDescription: 'save your favorite movies and series in one place',
})
</script>