
<template>
    <div :class="menu ? 'w-[250px]' : 'w-[70px]'"
        class="top-0 left-0 fixed z-10 duration-700 w-[250px] h-full bg-white bg-opacity-40 backdrop-blur-xl rounded backdrop-filter ">
        <div class="  w-full h-full flex justify-between  content-center flex-col">
            <div>
                <div class=" w-full mt-4  border-b-4">
                    <Icon @click="() => menu = !menu"
                        class="mb-3 rounded-sm duration-1000 cursor-pointer mx-4 hover:scale-[1.2]"
                        name="ic:round-view-list" color="white" size="40" />
                </div>
                <div class="w-full mt-4  border-b-4">
                    <nuxt-link :to="info.to" v-for="(info, index ) in infos" :key="index">
                        <div class=" my-3 cursor-pointer flex  content-center w-full h-full ">
                            <Icon class="mx-4 duration-1000 hover:scale-[1.2]" :name="info.icon" color="white" size="30" />
                            <h3 v-if="menu" class="duration-1000 text-white">{{ info.title }}</h3>
                        </div>
                    </nuxt-link>
                </div>
            </div>
            <div class="mb-10">
                <nuxt-link to="">
                    <div class=" cursor-pointer flex  content-center w-full h-full ">
                        <Icon class="mx-4 duration-1000 hover:scale-[1.2]" name="solar:logout-3-outline" color="#f43f5e"
                            size="30" />
                        <h3 v-if="menu" class="text-error duration-1000"> Logout</h3>
                    </div>
                </nuxt-link>
                <nuxt-link to="">
                    <div class=" cursor-pointer flex  content-center w-full h-full ">
                        <Icon class="mx-4 duration-1000 hover:scale-[1.2]" name="solar:login-3-bold" color="#34d399"
                            size="30" />
                        <h3 v-if="menu" class="text-success duration-1000"> Logout</h3>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const menu: boolean = ref(false);
interface infoType {
    title: string;
    icon: string;
    to: string;
}
const infos: infoType[] = [
    {
        title: "Home",
        icon: "ph:house-fill",
        to: "/",
    },
    {
        title: "Movies ",
        icon: "streamline:entertainment-play-list-4-screen-television-display-player-movies-players-tv-media-video",
        to: "/Movies",
    },
    {
        title: "Series",
        icon: "streamline:food-popcorn-cook-corn-movie-snack-cooking-nutrition-bake",
        to: "/Series",
    },
    {
        title: "Favorite",
        icon: "carbon:favorite-filled",
        to: "/Favorite",
    },
]


</script>

<style scoped>
.router-link-exact-active div h3 {
    color: blueviolet;
}
.router-link-exact-active div   {
    border-left-width: 4px;
    border-color: blueviolet;
}
</style>