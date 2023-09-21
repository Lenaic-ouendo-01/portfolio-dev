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
    description: 'I discovered modeling thanks to my school club and since then I like to climb the catwalk to present the creations of the stylists'
  },
  {
    src: '/src/assets/challenge/sport.jpg',
    titre: 'Sport',
    altImg:'sport',
    description: 'Quisque feugiat malesuada molestie.'
  }
])

let deb = ref(0)
let fin = ref(3)

function next() {
  deb.value = deb.value + 3;
  fin.value = fin.value + 3;
  console.log(deb.value)
}
function precedent() {
  deb.value = deb.value - 3;
  fin.value = fin.value - 3;
  console.log(deb.value)
}

</script>

<template>
  <h2 class="text-slate-500 font-fam2 font-medium text-2xl">Hobbies / Certifcates</h2>
  <div class="grid grid-cols-1 gap-5 mt-[26px]">
    <div v-for="(hobbie, index) in hobbies.slice(deb,fin)" :key="index" class="reveal-visible">
      <div class="overflow-hidden rounded-xl max-w-[383px] max-h-[139px] reveal-1">
        <img :src="hobbie.src" :alt="hobbie.altImg" class="h-full w-full border rounded-xl">
      </div>
      <p class="mt-[26px] font-fam1 font-semibold text-lg text-[#333]">{{ hobbie.titre }}</p>
      <p class="mt-3 font-fam4 font-medium text-base max-w-[383px] text-[#828282]">{{ hobbie.description }}</p>
    </div>
  </div>
  <div class="flex justify-center">
    <button @click="next()" v-if="fin < hobbies.length" class="reveal-visible button">Next</button>
    <button @click="precedent()" v-if="(deb) >= 3" class="reveal-visible button">Previous</button>
  </div>
  
</template>

<style scoped>
.button{
  @apply opacity-70 hover:opacity-100 bg-slate-200 p-3 rounded-xl text-amber-800  mt-5;
}
.reveal-visible{
  animation-duration: 2s;
  animation-name: text;
}
@keyframes text {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  50% {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
    transition: 1s cubic-bezier(1,-0.55,.61,1.89)
  }
}

</style>