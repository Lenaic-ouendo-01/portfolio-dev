<script setup>
import { ref } from 'vue';

    let isActive = ref(false)
    let isActive1 = ref(false)
    let isActive2 = ref(false)

    function toggleActive() {
      isActive.value = !isActive.value;
    }
    function toggleActive1() {
      isActive1.value = !isActive1.value;
    }
    function toggleActive2() {
      isActive2.value = !isActive2.value;
    }
</script>

<template>
    <p class="font-fam1 font-medium text-2xl aspec text-[#4F4F4F]">Projects (3)</p>

    <div class="flex gap-4 mt-[25.18px]">
        <button class="button" :class="{ active: isActive }" @click="toggleActive()">React</button>
        <button class="button" :class="{ active: isActive1 }" @click="toggleActive1()">Vue</button>
        <button class="button" :class="{ active: isActive2 }" @click="toggleActive2()">Reponsive</button>
    </div>
</template>

<style scoped>
.button{
    @apply py-2 px-[22px] border text-[#4F4F4F] rounded-xl font-fam1 hover:border-blue-700 hover:text-blue-700;
}

.active{
    @apply bg-blue-700 text-white hover:text-white;
}
</style>