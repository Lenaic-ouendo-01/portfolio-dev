<script setup>
import { ref } from 'vue';

let hobbies = ref([
    {
        src: '/src/assets/challenge/gaming.jpg',
        titre: 'Gaming',
        altImg:'Smart TV and PS5',
        description: 'Quisque feugiat malesuada molestie.'
    },
    {
        src: '/src/assets/challenge/dance.jpeg',
        titre: 'Dance',
        altImg:'dance',
        description: 'Quisque feugiat malesuada molestie.'
    },
    {
        src: '/src/assets/challenge/modeling.jpg',
        titre: 'Modeling',
        altImg:'Male model in suit',
        description: 'Quisque feugiat malesuada molestie.'
    },
    {
        src: '/src/assets/challenge/sport.jpg',
        titre: 'Sport',
        altImg:'sport',
        description: 'Quisque feugiat malesuada molestie.'
    },
    {
        src: '/src/assets/challenge/mercedes_maybach.jpg',
        titre: 'Car',
        altImg:'mercedes maybach S',
        description: 'Quisque feugiat malesuada molestie.'
    },
    {
        src: '/src/assets/challenge/micro.png',
        titre: 'Music',
        altImg:'vintage micro',
        description: 'Quisque feugiat malesuada molestie.'
    }
])
</script>

<template>
  <h2 class="text-slate-500 font-fam1 font-medium text-2xl">Hobbies / Certifcates</h2>
  <div class="grid grid-cols-1 gap-5 mt-[26px]">
    <div v-for="(hobbie, index) in hobbies" :key="index">
        <div class="overflow-hidden rounded-xl max-w-[383px] max-h-[139px]">
            <img :src="hobbie.src" :alt="hobbie.altImg" class="h-full w-full border rounded-xl">
        </div>
        <p class="mt-[26px] font-fam1 font-semibold text-lg text-[#333]">{{ hobbie.titre }}</p>
        <p class="mt-3 mb-[36px] font-fam1 font-medium text-base max-w-[383px] text-[#828282]">{{ hobbie.description }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>