<script setup>
import ProfilContact1 from './components/ProfilContact1.vue';
import ProfilContact2 from './components/ProfilContact2.vue';
import RealisationPage1 from './components/RealisationPage1.vue';

let language = "#HTML #CSS #Tailwindcss #Vanilla Js"
let title = "404 Not Found"
let description = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veniam a corrupti, aliquid esse nihil quod ullam sapiente expedita maiores. "
let demoLink = '#'
let codeLink = '#'
</script>

<template>
  <div class="p-4 bg-zinc-300 flex justify-between">
    <div class="w-[400px] h-[300px] bg-black/90 rounded-xl p-3 pb-0 overflow-hidden">
      <RealisationPage1/>
    </div>
    <div class="max-w-[520px]">
      <p class="">{{ language }}</p>
      <p class="mt-5">{{ title }}</p>
      <p class="mt-5">{{ description }}</p>
      <a :href="demoLink">
        <button type="button" class="bg-sky-600 w-32 h-11 mt-24 text-white rounded-xl">Demo</button>
      </a>
      <a :href="codeLink">
        <button type="button" class="text-sky-600 w-32 h-11 border-sky-600 border-2 ml-3 rounded-xl">Code</button>
      </a>
    </div>
  </div>
</template>

<style scoped>
:root{
  @apply font-fam1;
}
</style>
