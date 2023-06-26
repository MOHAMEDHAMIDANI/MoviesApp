<template>
  <div>
    <Loading v-if="wait" />
    <div v-else
      class="container relative left-[50%] h-[500px] p-2 -translate-x-[50%] bg-white bg-opacity-10 backdrop-blur-xl rounded-xl backdrop-filter ">
      <h3
        class="text-white absolute mt-5 w-[150px] z-[21] text-center  translate-x-[-50%] bg-white bg-opacity-10 backdrop-blur-xl rounded-xl backdrop-filter top-0 left-[50%] z-1 ">
        Up Coming </h3>
      <div class="w-full h-full">
        <carousel v-slot="{ currentSlide }">
          <slider v-for="(img, index ) in Upcoming" :key="index">
            <img v-if="currentSlide === index + 1" :src="`https://image.tmdb.org/t/p/w500` + Upcoming[index].poster_path"
              alt="" class="w-full h-full object-contain object-center">
          </slider>
        </carousel>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import axios from 'axios';
interface resType {
  backdrop_path: string,
  first_air_date: string,
  genre_ids: number[],
  id: number,
  title: string,
  origin_country: string[],
  original_language: string,
  original_name: string,
  overview: string,
  popularity: number,
  poster_path: string,
  vote_average: number,
  vote_count: number,
}
let Upcoming: resType[];;
const wait = ref(true);
const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/upcoming',
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
      Upcoming = results;
      wait.value = false;
    })
}
getData();
</script>

<style scoped></style>