<script setup>

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
        <p class="text-gray-500 text-sm font-fam4 mt-2">{{ version }}</p>
        <img :src="Image" alt="" class="w-20 mt-2 mx-auto">
      </div>
      <img :src="ImageSrc" alt="" class="overflow-hidden">
    </div>



    <!-- Premier style du Composant. Code App
    <div class="p-4 rounded-xl flex justify-between font-fam1 font-medium shadow-md w-[1024px] h-[311px]">
        <div class="w-[400px] h-[300px] bg-black/90 rounded-xl p-3 pb-0 overflow-hidden">
            <RealisationPage1/>
        </div>
        <div class="max-w-[520px]">
            <p class=" text-gray-500">{{ language }}</p>
            <p class="mt-[25px] text-black/90 text-2xl font-medium">{{ title }}</p>
            <p class="mt-[18px] text-zinc-400 text-base">{{ description }}</p>
            <a :href="demoLink">
                <button type="button" class="bg-sky-600 w-32 h-11 mt-24 text-white rounded-xl text-lg">Demo</button>
            </a>
            <a :href="codeLink">
                <button type="button" class="text-sky-600 w-32 h-11 border-sky-600 border-2 ml-3 rounded-xl text-lg">Code</button>
            </a>
        </div>
    </div>

    Second style du composant. Code App
    <div class="p-4 rounded-xl justify-between font-fam1 font-medium shadow-md w-[400px]">
    <div class="w-[350px] h-[260px] bg-black/90 rounded-xl p-3 pb-0 overflow-hidden">
      <RealisationPage1/>
    </div>
    <div class="max-w-[520px] mt-[22px]">
      <p class=" text-gray-500">{{ language }}</p>
      <p class="mt-[22px] text-black/90 text-2xl font-medium">{{ title }}</p>
      <p class="mt-[18px] text-zinc-400 text-base">{{ description }}</p>
      <a :href="demoLink">
        <button type="button" class="bg-sky-600 w-32 h-11 mt-10 text-white rounded-xl text-lg">Demo</button>
      </a>
      <a :href="codeLink">
        <button type="button" class="text-sky-600 w-32 h-11 border-sky-600 border-2 ml-3 rounded-xl text-lg">Code</button>
      </a>
    </div> 
  </div> -->
</template>

<style scoped>
:root{
    @apply bg-black/90;
}
</style>