<template>
    <Mainlayout>
        <a  href="/" class="ml-5 mt-2 btn btn-primary">Home page</a>
        <div class=" container flex flex-wrap text-white">
            <div class="w-[400px] min-w-[250px]">
                <img class="p-3 w-full h-full object-cover"
                :src="`https://image.tmdb.org/t/p/w500` + current_movie[0].value.poster_path" alt="">
            </div>
            <div class="info">
                <div class=" capitalize  ml-5 mt-4">
                    <h2 class="text-xl">title : {{ current_movie[0].value.title }} </h2>
                    <h2>release date : {{ current_movie[0].value.release_date }}</h2>
                    <h2 class=" capitalize">children : <span> {{ current_movie[0].value.adults ? "not recommended for children"
                        : "recommended for children" }}</span> </h2>
                    <span class="text-xl">vote : <span class="">{{ current_movie[0].value.vote_average }} </span> /
                        10</span>
                    <p class="max-w-[450px] min-w-[250px] text-white">
                        <span class=" underline ">overview :</span> {{ current_movie[0].value.overview }}
                    </p>
                </div>
            </div>
        </div>

    </Mainlayout>
</template>

<script setup >
import Mainlayout from '~/layouts/Mainlayout.vue';
const id = useRoute().params.id;

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWJiMDZhOTk5ODAxMzlkZjI4MDkyMGUxNGExYzFkYyIsInN1YiI6IjY0ODVmYjkzYzlkYmY5MDBjNTcyNGRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nPXI0ticpVdpUZjx0levKXkjUeb2v4ctFF05x7kVlQ'
    }
};
let current_movie = [];
const { data: movie } = useFetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
current_movie.push(movie);
onMounted(()=>{
    const title = current_movie[0].value.title ;
    const desc = current_movie[0].value.overview ;
    useSeoMeta({
      title: `${title}`,
      ogTitle: `${title}`,
      description: `${desc}`,
      ogDescription:`${desc}` ,
    })
})
</script>

<style scoped></style>