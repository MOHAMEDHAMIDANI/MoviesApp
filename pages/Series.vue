<template>
    <Mainlayout>
        <h2 class="text-xl capitalize mb-3 ml-7 text-purple-600"> discover new series :</h2>
        <Loading v-if="wait" />
        <div v-else class="grid gap-x-2 justify-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6" >
            <Movie v-for="serie in Series" :key="serie.id" :id="serie.id" :title="serie.name"
                :vote_average="serie.vote_average" :poster_path="serie.poster_path" />
        </div>

    </Mainlayout>
</template>

<script setup lang="ts">
import Mainlayout from '../layouts/Mainlayout.vue';
import axios from 'axios';
const wait = ref(true);
interface resType {
    backdrop_path: string,
    first_air_date: string,
    genre_ids: number[],
    id: number,
    name: string,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    vote_average: number,
    vote_count: number,
}
let Series: resType[];
const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/tv/top_rated',
    params: { language: 'en-US', page: '1' },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWJiMDZhOTk5ODAxMzlkZjI4MDkyMGUxNGExYzFkYyIsInN1YiI6IjY0ODVmYjkzYzlkYmY5MDBjNTcyNGRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nPXI0ticpVdpUZjx0levKXkjUeb2v4ctFF05x7kVlQ'
    }
};

const getData = () => {
    wait.value = true;
    axios
        .request(options)
        .then(function (response) {
            const results: resType[] = response.data.results;
            Series = results;
            wait.value = false;
        })

}
getData()
const route = useRoute().name;
useSeoMeta({
  title: `${route}`,
  ogTitle: `${route}`,
  description: 'all series in one place',
  ogDescription: 'all series in one place',
})
</script>
