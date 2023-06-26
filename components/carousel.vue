<template>
    <div class="w-full h-full relative">
        <slot :currentSlide="currentSlide" />
        <Icon @click="prevslide"
            class="mx-4 left-0 z-10 top-[50%] -translate-y-[50%] cursor-pointer absolute duration-1000 hover:scale-[1.2] "
            name="ic:sharp-arrow-circle-left" color="#570df8" size="35" />
        <Icon @click.prevent="nextslide"
            class="mx-4 right-0 top-[50%] -translate-y-[50%] z-10 cursor-pointer absolute bottom-0 duration-1000 hover:scale-[1.2]"
            name="ic:sharp-arrow-circle-right" color="570df8" size="35" />
    </div>
</template>

<script setup lang="ts">
const currentSlide = ref(2)
const nextslide = () => {
    if (currentSlide.value === 20) {
        currentSlide.value = 1;
        return
    }
    currentSlide.value += 1;
}
const prevslide = () => {
    if (currentSlide.value === 1) {
        currentSlide.value = 20;
        return
    }
    currentSlide.value -= 1;
}
const autoplay = () => {
    setInterval(() => {
        nextslide();
    }, 4000);
};
autoplay();

</script>

<style scoped></style>