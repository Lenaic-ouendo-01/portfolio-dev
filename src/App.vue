<script setup>
  import ProfilContact1 from './components/ProfilContact1.vue';
  import ProfilContact2 from './components/ProfilContact2.vue';
  import RealisationPage1 from './components/RealisationPage1.vue';
  import LanguageLevel1 from './components/LanguageLevel1.vue';
  import LanguageLevel2 from './components/LanguageLevel2.vue';
  import HobbiesComponent1 from './components/HobbiesComponent1.vue';
  import HobbiesComponent2 from './components/HobbiesComponent2.vue';
  import BlogComponent2 from './components/BlogComponent2.vue';
  import BlogComponent1 from './components/BlogComponent1.vue';
  import ExperienceComponent1 from './components/ExperienceComponent1.vue';
  import ExperienceComponent2 from './components/ExperienceComponent2.vue';
  import ProjectBar from './components/ProjectBar.vue';
  import { ref } from 'vue';

  let realisations = ref([
    {
      language :  "#HTML #CSS #Tailwindcss",
      demoLink : 'https://mallory-404-not-found.netlify.app',
      codeLink : '',
      title : "404 Not Found",
      description : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veniam a corrupti, aliquid esse nihil quod ullam sapiente expedita maiores. "
    },
    {
      language :  "#HTML #CSS #Tailwindcss",
      demoLink : 'https://devchallenge-my-team-page.netlify.app',
      codeLink : '',
      title : "My Team",
      description : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veniam a corrupti, aliquid esse nihil quod ullam sapiente expedita maiores. "
    },
    {
      language :  "#HTML #CSS #Tailwindcss #Vanilla Js",
      demoLink : 'https://challenge-interior-consultant.netlify.app',
      codeLink : '',
      title : "Interior Consultant",
      description : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veniam a corrupti, aliquid esse nihil quod ullam sapiente expedita maiores. "
    },
    {
      language :  "#HTML #CSS #Tailwindcss #Vanilla Js",
      demoLink : 'https://page-recipe.netlify.app',
      codeLink : '',
      title : "Recipe Page",
      description : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veniam a corrupti, aliquid esse nihil quod ullam sapiente expedita maiores. "
    },
    {
      language :  "#HTML #CSS #Tailwindcss",
      demoLink : 'https://my-gallery-challenge-page.netlify.app',
      codeLink : '',
      title : "My Gallery",
      description : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veniam a corrupti, aliquid esse nihil quod ullam sapiente expedita maiores. "
    },
    {
      language :  "#HTML #CSS #Tailwindcss #Vanilla Js",
      demoLink : 'https://page-checkout.netlify.app',
      codeLink : '',
      title : "Checkout Page",
      description : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veniam a corrupti, aliquid esse nihil quod ullam sapiente expedita maiores. "
    },
    {
      language :  "#HTML #CSS #Tailwindcss #Vanilla Js",
      demoLink : 'https://edie-page-home.netlify.app',
      codeLink : '',
      title : "Edie Homepage",
      description : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veniam a corrupti, aliquid esse nihil quod ullam sapiente expedita maiores. "
    },
    {
      language :  "#HTML #CSS #Tailwindcss",
      demoLink : 'https://my-frame-menu.netlify.app',
      codeLink : '',
      title : "Menu",
      description : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veniam a corrupti, aliquid esse nihil quod ullam sapiente expedita maiores. "
    },
  ])

  let ImageSrc = [
    "/src/assets/challenge/Capture404L.png",
    "/src/assets/challenge/CaptureTeamL.png",
    "/src/assets/challenge/CaptureInteriorL.png",
    "/src/assets/challenge/CaptureRecipeL.png",
    "/src/assets/challenge/CaptureGalleryL.png",
    "/src/assets/challenge/CaptureCheckoutL.png",
    "/src/assets/challenge/CaptureEdieL.png",
    "/src/assets/challenge/CaptureMenuL.png"
  ]
  let Image = [
    "/src/assets/challenge/Capture404.png",
    "/src/assets/challenge/CaptureTeam.png",
    "/src/assets/challenge/CaptureInterior.png",
    "/src/assets/challenge/CaptureRecipe.png",
    "/src/assets/challenge/CaptureGallery.png",
    "/src/assets/challenge/CaptureCheckout.png",
    "/src/assets/challenge/CaptureEdie.png",
    "/src/assets/challenge/CaptureMenu.png"
  ]
  let version = [
    "The design includes mobile and desktop version",
    "The design includes mobile and desktop version",
    "The design includes mobile and desktop version",
    "The design includes mobile and desktop version",
    "The design includes mobile and desktop version",
    "The design includes mobile and desktop version",
    "The design includes mobile and desktop version",
    "The design includes mobile, tablet and desktop version",
  ]
</script>

<template>
  <div class="ani max-w-[1046px] mx-auto p-5">
    <div class="component w-full sm:max-w-[1046px]">
      <ProfilContact1/>
    </div>
  
    <div class="flex justify-between gap-4">
      <div>
        <div class="component max-w-[415.025px]">
          <LanguageLevel1/>
        </div>
        <div class="component max-w-[415px]">
          <HobbiesComponent2/>
        </div>
      </div>
      <div>
        <div class="component max-w-[596px] pr-0">
          <BlogComponent2/>
        </div>
        <div class="component max-w-[592px]">
          <ExperienceComponent2/>
        </div>
      </div>
    </div>
    <div class="component">
      <ProjectBar/>
    </div>
    <div class="flex gap-4">
      <div class="component p-4 rounded-xl justify-between font-fam1 font-medium shadow-md w-[400px]" v-for="(realisation, index) in realisations" :key="index">
        <div class="w-[350px] h-[260px] bg-black/90 rounded-xl p-3 pb-0 overflow-hidden">
          <RealisationPage1 :ImageSrc="ImageSrc[index]" :Image="Image[index]" :titre="realisation.title" :version="version[index]"/>
        </div>
        <div class="max-w-[520px] mt-[22px]">
          <p class=" text-gray-500">{{ realisation.language }}</p>
          <p class="mt-[22px] text-black/90 text-2xl font-medium">{{ realisation.title }}</p>
          <p class="mt-[18px] text-zinc-400 text-base">{{ realisation.description }}</p>
          <a :href="realisation.demoLink" target="_blank">
            <button type="button" class="bg-sky-600 w-32 h-11 mt-10 text-white rounded-xl text-lg">Demo</button>
          </a>
          <a :href="realisation.codeLink" target="_blank">
            <button type="button" class="text-sky-600 w-32 h-11 border-sky-600 border-2 ml-3 rounded-xl text-lg">Code</button>
          </a>
        </div> 
      </div>
    </div>
  </div>
</template>

<style scoped>
.ani{
  animation-duration: 800ms;
  animation-name: comp;
}
@keyframes comp {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.component{
  @apply bg-white rounded-xl p-[22px] items-center;
}
</style>
