<template>
    <Mainlayout>
        <a  href="/" class="ml-5 mt-2 btn btn-primary">Home page</a>
        <div class=" container flex flex-wrap text-white">
            <div class="w-[400px] min-w-[250px]">
                <img class="p-3 w-full h-full object-cover"
                :src="`https://image.tmdb.org/t/p/w500` + $MoviesStore.details.value.poster_path" alt="">
            </div>
            <div class="info">
                <div class=" capitalize  ml-5 mt-4">
                    <h2 class="text-xl">title : {{ $MoviesStore.details.value.title }} </h2>
                    <h2>release date : {{ $MoviesStore.details.value.release_date }}</h2>
                    <h2 class=" capitalize">children : <span> {{ $MoviesStore.details.value.adults ? "not recommended for children"
                        : "recommended for children" }}</span> </h2>
                    <span class="text-xl">vote : <span class="">{{ $MoviesStore.details.value.vote_average }} </span> /
                        10</span>
                    <p class="max-w-[450px] min-w-[250px] text-white">
                        <span class=" underline ">overview :</span> {{ $MoviesStore.details.value.overview }}
                    </p>
                </div>
            </div>
        </div>
    </Mainlayout>
</template>
<script setup >
import Mainlayout from '~/layouts/Mainlayout.vue';
const { $MoviesStore } = useNuxtApp();
const id = useRoute().params.id;
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:process.env.apiauth,
    }
};
onBeforeMount(() => {
    $MoviesStore.fetchdetails(id , options)
}),

useSeoMeta({
  title: `${$MoviesStore.details.value.title}`,
  ogTitle: `${$MoviesStore.details.value.title}`,
  description: `${$MoviesStore.details.value.overview}`,
  ogDescription:`${$MoviesStore.details.value.overview}` ,
})
</script>

<style scoped></style>