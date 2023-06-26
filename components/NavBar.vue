<template>
    <div>
        <div class="bg-white bg-opacity-10 backdrop-blur-xl rounded backdrop-filter w-full h-[80px]">
            <div class="navbar justify-end content-center">
                <div>
                    <Transition name="slide-fade">
                        <div class="form-control mr-2" v-if="SearchBar">
                            <input @keyup.enter="click" ref="" v-model="searchValue" type="text"
                                placeholder="any thoughts ?!"
                                class="border-primary border-2 input w-[150px] h-[50px] md:w-auto" />
                        </div>
                    </Transition>
                    <button @click="() => (SearchBar = !SearchBar)" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-teal-50" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <button class="btn btn-ghost btn-circle">
                        <div class="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-teal-50" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span class="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div v-if="searchValue" class="ml-[80px]">
            <h2 class="text-xl capitalize mb-3 ml-7 text-purple-600">
                results for : {{ searchValue }}
            </h2>
            <Loading v-if="wait" />
            <div v-else
                class="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                <Movie v-for="Movie in data" :key="Movie.id" :id="Movie.id" :title="Movie.title"
            :vote_average="Movie.vote_average" :poster_path="Movie.poster_path"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const SearchBar: boolean = ref(false);
let keyword: string;
const searchValue = ref("");
const wait = ref(true);
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
let data: resType[];

watch(searchValue, () => {
    wait.value = true;
    keyword = searchValue.value;
});
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWJiMDZhOTk5ODAxMzlkZjI4MDkyMGUxNGExYzFkYyIsInN1YiI6IjY0ODVmYjkzYzlkYmY5MDBjNTcyNGRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nPXI0ticpVdpUZjx0levKXkjUeb2v4ctFF05x7kVlQ'
    }
};
const click = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(function(response){
            const results :resType[] = response.results;
            data = results;
            wait.value = false;
        })
};
</script>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(100px);
    opacity: 0;
}
</style>pini