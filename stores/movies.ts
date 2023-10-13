import { defineStore } from 'pinia'
import { Interface } from 'readline';
import axios from 'axios';
export const useMoviesStore = defineStore('Movies', {
  state: () => ({
    isLoading: false,
    movies: [] as moviesType[],
    series: [] as seriesType[],
    Upcoming: [] as moviesType[],
    favorite: [] as number[],
    favoriteInfo: [] as moviesType[],
    search: [] as moviesType[],
    details: [],
  }),
  getters: {

  },
  actions: {
    async fetchmovies(options) {
      try {
        this.isLoading = true;
        axios
          .request(options)
          .then(function (response) {
            this.movies = response.data.results;
            this.isLoading = false;
          })
      } catch (error) {
        console.log(error)
      }
    },
    async fetchseries(options) {
      try {
        this.isLoading = true;
        this.isLoading = true;
        axios
          .request(options)
          .then(function (response) {
            this.series = response.data.results;
            this.isLoading = false;
          })
      } catch (error) {
        console.log(error)
      }
    },
    async fetchUpcoming(options) {
      try {
        this.isLoading = true;
        axios
          .request(options)
          .then(function (response) {
            this.Upcoming = response.data.results;
            this.isLoading = false;
          })
      } catch (error) {
        console.log(error)
      }
    },
    async fetchfavorite(options) {
      try {
        this.isLoading = true;
        this.favorite.forEach((id: number) => {
          const { data: movie } = useFetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
          this.favoriteInfo.push(movie.value);
        })
        this.isLoading = false;
      } catch (error) {
        console.log(error)
      }
    },
    async fetchdetails(id, options) {
      try {
        this.isLoading = true;
        this.details = useFetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        this.isLoading = false;
      } catch (error) {
        console.log(error)
      }
    },
    async fetchsearch(keyword, options) {
      try {
        this.isLoading = true;
        fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`, options)
          .then(response => response.json())
          .then(function (response) {
            this.search = response.results;
            this.isLoading = false;
          })
      } catch (error) {
        console.log(error)
      }
    }
  },
})
interface seriesType {
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
interface moviesType {
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