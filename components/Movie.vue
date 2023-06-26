<template>
    <div class="w-[200px] h-[300px] mb-[60px] ml-4 relative">
        <span v-if="!isFav" class="absolute top-0 duration-1000 -right-2 ">
            <Icon @click="addToFav(props.id)" class="mx-4 cursor-pointer"
                name="material-symbols:heart-broken-outline" color="blueviolet"
                size="30" />
        </span>
        <span v-else class="absolute top-0 duration-1000 -right-2 ">
            <Icon @click="removeFromFav(props.id)" class="mx-4 cursor-pointer"
                name="material-symbols:heart-check-rounded" color="blueviolet"
                size="30" />
        </span>
        <nuxt-link :to="{name: 'Movies-details-id', params: { id: id } }">
            <span
                class="bg-white bg-opacity-40 mt-1 pl-2 backdrop-blur-xl backdrop-filter rounded-xl flex justify-between content-center absolute top-0 left-1 text-white">
                {{ vote_average }}
                <Icon class="mx-1  mt-[3px]" name="mdi:progress-star" color="gold"
                    size="25" />
            </span>
            <img loading="true" :src="`https://image.tmdb.org/t/p/w500` + poster_path" alt="" class="w-full h-full">
            <h3
                class="px-1 w-full h-[50px] text-sm text-black text-center overflow-clip bg-white bg-opacity-40 backdrop-blur-xl backdrop-filter">
                {{ title }}
            </h3>
        </nuxt-link>
        
    </div>
</template>

<script setup lang="ts">
interface Props {
    id?:number | null,
    poster_path?:string,
    title?:string | null,
    vote_average?:number,
}
const props = defineProps<Props>();
let isFav  = ref(false);
const { $MoviesStore } = useNuxtApp();
const addToFav = (id:number) => {
    if($MoviesStore.favorite.includes(id) == true ){
    }
    else {isFav.value = true;
    $MoviesStore.favorite.push(id);
}
}
const removeFromFav = (id:number) => {
    isFav.value = false;
    $MoviesStore.favorite = $MoviesStore.favorite.filter((current:number) =>{
        return current != id;
    })
}
</script>

<style scoped></style>