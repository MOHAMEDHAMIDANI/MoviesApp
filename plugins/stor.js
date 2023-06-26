import { useMoviesStore } from "~/stores/movies";

export default defineNuxtPlugin ((NuxtApp) =>{
    return {
        provide : {
            MoviesStore : useMoviesStore(),
        }
    }
})