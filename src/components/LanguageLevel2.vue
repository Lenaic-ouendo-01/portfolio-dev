<script setup>

</script>

<template>
    <p class="font-fam2 text-lg font-bold text-black/90">Front End</p>
    <div class="grid grid-cols-2">
        <div class="div">
            <p class="p">Tailwindcss</p>
            <div class="ml-5">
                <div class="w-[95%] h-[9px] rounded-xl bg-gradient-to-r from-sky-200 to-sky-600"></div>
            </div>
        </div>
        <div class="div">
            <p class="p">Vue</p>
            <div class="ml-[88px]">
                <div class="w-[70%] h-[9px] rounded-xl bg-gradient-to-r from-sky-200 to-sky-600"></div>
            </div>
        </div>
        <div class="div">
            <p class="p">Javascript</p>
            <div class="ml-[32px]">
                <div class="w-[65%] h-[9px] rounded-xl bg-gradient-to-r from-sky-200 to-sky-600"></div>
            </div>
        </div>
        <div class="div">
            <p class="p">Html</p>
            <div class="ml-[78px]">
                <div class="w-[87%] h-[9px] rounded-xl bg-gradient-to-r from-sky-200 to-sky-600"></div>
            </div>
        </div>
        <div class="div">
            <p class="p">Css</p>
            <div  class="ml-[93px]">
                <div class="w-[70%] h-[9px] rounded-xl bg-gradient-to-r from-sky-200 to-sky-600"></div>
            </div>
        </div>
        <div class="div">
            <p class="p">React</p>
            <div class="ml-[72px]">
                <div class="w-[10%] h-[9px] rounded-xl bg-gradient-to-r from-sky-200 to-sky-600"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.div{
    @apply font-fam2 flex mt-4;
}

.p{
    @apply font-fam2 font-medium text-base text-black/80;
}

.div>div{
    @apply mt-2 w-[348px] h-[9px] bg-[#c4c4c4] rounded-xl;
}

</style>