<template>
    <Mainlayout>
        <h2 class="text-xl capitalize mb-3 ml-7 text-purple-600" v-if="data"> Your favorite stuff :</h2>
        <h2 class="text-xl capitalize mb-3 ml-7 text-purple-600" v-else> you have to like some thing to appeare here </h2>
        
        <div class="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            <Movie v-for="Movie in data" :key="Movie.id" :id="Movie.id" :title="Movie.title"
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
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWJiMDZhOTk5ODAxMzlkZjI4MDkyMGUxNGExYzFkYyIsInN1YiI6IjY0ODVmYjkzYzlkYmY5MDBjNTcyNGRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nPXI0ticpVdpUZjx0levKXkjUeb2v4ctFF05x7kVlQ'
    }
};
interface resType {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    title: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}

const fav = ref([]);
let data: resType[];
const { $MoviesStore } = useNuxtApp();
$MoviesStore.favorite.forEach((id: number = 2 ) => {
    const { data: movie } = useFetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    fav.value.push(movie.value);
})
data = fav.value;
const route = useRoute().name;
useSeoMeta({
  title: `${route}`,
  ogTitle: 'save your favorite movies and series in one place',
  description: 'save your favorite movies and series in one place',
  ogDescription: 'save your favorite movies and series in one place',
})
</script>