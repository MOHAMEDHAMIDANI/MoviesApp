<template>
    <Mainlayout>
        <h2 class="text-xl capitalize mb-3 ml-7 text-purple-600"> discover new series :</h2>
        <Loading v-if="$MoviesStore.isLoadig" />
        <div v-else class="grid gap-x-2 justify-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6" >
            <Movie v-for="serie in $MoviesStore.series" :key="serie.id" :id="serie.id" :title="serie.name"
                :vote_average="serie.vote_average" :poster_path="serie.poster_path" />
        </div>

    </Mainlayout>
</template>

<script setup lang="ts">
import Mainlayout from '../layouts/Mainlayout.vue';
const route = useRoute().name;
const { $MoviesStore } = useNuxtApp();
const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/tv/top_rated',
    params: { language: 'en-US', page: '1' },
    headers: {
        accept: 'application/json',
        Authorization: process.env.apiauth,
    }
};
onBeforeMount(async() => {
  await $MoviesStore.fetchseries(options);
}),
useSeoMeta({
  title: `${route}`,
  ogTitle: `${route}`,
  description: 'all series in one place',
  ogDescription: 'all series in one place',
})
</script>
