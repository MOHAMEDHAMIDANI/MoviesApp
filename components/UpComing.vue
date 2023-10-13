<template>
  <div>
    <Loading v-if="$MoviesStore.isLoadig" />
    <div v-else
      class="container relative left-[50%] h-[500px] p-2 -translate-x-[50%] bg-white bg-opacity-10 backdrop-blur-xl rounded-xl backdrop-filter ">
      <h3
        class="text-white absolute mt-5 w-[150px] z-[21] text-center  translate-x-[-50%] bg-white bg-opacity-10 backdrop-blur-xl rounded-xl backdrop-filter top-0 left-[50%] z-1 ">
        Up Coming </h3>
      <div class="w-full h-full">
        <carousel v-slot="{ currentSlide }">
          <slider v-for="(img, index ) in  $MoviesStore.Upcoming" :key="index">
            <img v-if="currentSlide === index + 1" :src="`https://image.tmdb.org/t/p/w500` + img.poster_path"
              alt="" class="w-full h-full object-contain object-center">
          </slider>
        </carousel>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { $MoviesStore } = useNuxtApp();

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/upcoming',
  params: { language: 'en-US', page: '1' },
  headers: {
    accept: 'application/json',
    Authorization: `${process.env.apiauth}`
  }
};

onBeforeMount(() => {
  $MoviesStore.fetchUpcoming(options)
}),
const getData = () => {
  wait.value = true;
  
}
getData();
</script>

<style scoped></style>