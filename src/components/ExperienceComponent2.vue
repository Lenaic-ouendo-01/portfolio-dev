<script setup>
import { ref } from 'vue';

let experiences = ref([
    {
        logo: '/src/assets/challenge/adidas.jpeg',
        duration: 'Feb 2017 - Current',
        post: 'Front-end developer',
        altImg: 'Adidas logo',
        description: 'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
    },
    {
        logo: '/src/assets/challenge/H_M.png',
        duration: 'Aug 2016 - Feb 2017',
        post: 'Full-stack developer',
        altImg: 'H&M logo',
        description: 'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
    },
    {
        logo: '/src/assets/challenge/Nivea.jpg',
        duration: 'Jun 2015 - Aug 2016',
        post: 'Junior front-end developer',
        altImg: 'Nivea logo',
        description: 'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
    }
])
</script>

<template>
    <h2 class="text-slate-500 font-fam1 font-medium text-2xl">Experiences</h2>
    <div v-for="(experience, index) in experiences" :key="index" class="flex gap-4 mt-10">
      <img :src="experience.logo" :alt="experience.altImg" class="mt-7 max-w-[84px] max-h-[84px]">
      <div>
          <p class="mt-[18px] font-fam1 font-medium text-sm text-[#828282]">{{ experience.duration }}</p>
          <p class="mt-3 font-fam1 font-semibold text-base">{{ experience.post }}</p>
          <p class="mt-[33px] max-w-[273px] font-fam4 font-medium text-base text-[#828282]">{{ experience.description }}</p>
      </div>
    </div>
</template>

<style scoped>

</style>