import { defineStore } from 'pinia'
import { Interface } from 'readline';
import axios from 'axios';
export const useMoviesStore = defineStore('Movies', {
  state: () => ({
    favorite: [] as number[],
  }),
  getters: {
  },
  actions: {
  },
})