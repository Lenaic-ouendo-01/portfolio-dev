<script setup>
let ImageSrc = '/src/assets/challenge/Capture404L.png'
let Image ="/src/assets/challenge/Capture404.png"

let titre = '404 Not Found'
let version = "The design includes mobile and desktop version"

const props = defineProps({
  ImageSrc: String,
  Image: String,
  titre: String,
  version: String
})
</script>

<template>
    <div class="flex">
        <div class="mr-2">
            <p class="text-orange-200 text-xs font-fam2">{{ titre }}</p>
            <div class="mt-2 rounded h-2 w-14 bg-gradient-to-r from-orange-400 to-orange-200"></div>
            <p class="text-gray-500 text-sm mt-3">{{ version }}</p>
            <img :src="Image" alt="" class="w-20 mt-2 mx-auto">
        </div>
        <img :src="ImageSrc" alt="" class=" overflow-hidden">
    </div>

</template>

<style scoped>
:root{
    @apply bg-black/90;
}
</style>