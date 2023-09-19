<script setup>

</script>

<template>
    <div class="flex justify-between font-fam1">
        <div>
            <p class="text-black/20">Blog</p>
            <p class="max-w-[178px] font-medium text-2xl mt-[30px]">How to organize your CSS</p>
            <p class="mt-[26px] font-normal text-base mb-10 max-w-[465px] text-gray-500/80">
                In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi. <br>
                <br>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
            </p>
            <a href="https://dev.to" class="text-[#2F80ED] text-base font-medium">dev.to</a>
        </div>
        <div class="overflow-hidden rounded-l-xl max-w-[627px] max-h-[380.202px]">
            <img src="../assets/challenge/coffee.jpg" class="w-full" alt="Coffee laptop and phone">
        </div>
    </div>

    <!--                                              *********************CODE POUR AIDER Yessirine********************* 
        <div class="flex justify-between p-4">
        <div>
            <h2 class="font-fam2 font-medium mt-4 text-sky-400">Add a Mission</h2>
            <div class="border rounded-xl p-4 shadow shadow-gray-400">
                <p class="font-fam4 font-bold text-lg mt-4">Start Date</p>
                <div class="flex h-14 border-neutral-600 rounded-xl mt-[7px] border items-center shadow-sm shadow-black/40 hover:shadow-yellow-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-4" width="36" height="36" viewBox="0 0 36 36"><path fill="#66757F" d="M28.815 4h1.996v1h-1.996z"/><path fill="#CCD6DD" d="M2 12v20a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V12H2z"/><path fill="#DD2E44" d="M30 4H6a4 4 0 0 0-4 4v5h32V8a4 4 0 0 0-4-4z"/><path fill="#292F33" d="M8.836 8.731c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.27.667 1.27 1.489c0 .822-.569 1.489-1.27 1.489zm6 0c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.27.667 1.27 1.489c0 .822-.569 1.489-1.27 1.489zm6 0c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.271.667 1.271 1.489c-.001.822-.57 1.489-1.271 1.489zm6 0c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.271.667 1.271 1.489c-.001.822-.57 1.489-1.271 1.489z"/><path fill="#66757F" d="M27.315.179c-1.277 0-2.383.802-2.994 1.97c-.606-1.143-1.717-1.97-3.006-1.97c-1.277 0-2.383.802-2.994 1.97c-.606-1.143-1.717-1.97-3.006-1.97c-1.277 0-2.383.802-2.994 1.97c-.606-1.143-1.717-1.97-3.006-1.97c-1.934 0-3.5 1.819-3.5 4.005c0 1.854 1.045 3.371 2.569 3.926c.759.275 1.224-.447 1.159-1.026c-.055-.48-.374-.793-.729-1.018c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095s1.5.905 1.5 1.905h1.016c-.003.062-.016.121-.016.184c0 1.854 1.045 3.371 2.569 3.926c.759.275 1.224-.447 1.159-1.026c-.055-.479-.374-.792-.729-1.017c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095S16.815 3 16.815 4h1.016c-.003.062-.016.121-.016.184c0 1.854 1.045 3.371 2.569 3.926c.759.275 1.224-.447 1.159-1.026c-.055-.479-.374-.792-.729-1.017c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095S22.815 3 22.815 4h1.016c-.003.062-.016.121-.016.184c0 1.854 1.045 3.371 2.569 3.926c.759.275 1.224-.447 1.159-1.026c-.055-.479-.374-.792-.729-1.017c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095S28.815 3 28.815 4h1.996C30.79 2 29.235.179 27.315.179z"/><path fill="#FFF" d="M11 15h4v4h-4zm5 0h4v4h-4zm5 0h4v4h-4zm5 0h4v4h-4zM6 20h4v4H6zm5 0h4v4h-4zm5 0h4v4h-4zm5 0h4v4h-4zm5 0h4v4h-4zM6 25h4v4H6zm5 0h4v4h-4zm5 0h4v4h-4zm5 0h4v4h-4zm5 0h4v4h-4zM6 30h4v4H6zm5 0h4v4h-4zm5 0h4v4h-4z"/></svg>
                    <input type="date" name="startDate" id="" placeholder="jj/mm/aaaa" class="lg:text-base w-full text-xs text-black/80 border-0 appearance-none outline-none ml-4" required>
                </div>
    
                <p class="font-fam4 font-bold text-lg mt-4">End Date</p>
                <div class="flex h-14 border-neutral-600 rounded-xl mt-[7px] border items-center shadow-sm shadow-black/40 hover:shadow-yellow-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-4" width="36" height="36" viewBox="0 0 36 36"><path fill="#66757F" d="M28.815 4h1.996v1h-1.996z"/><path fill="#CCD6DD" d="M2 12v20a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V12H2z"/><path fill="#DD2E44" d="M30 4H6a4 4 0 0 0-4 4v5h32V8a4 4 0 0 0-4-4z"/><path fill="#292F33" d="M8.836 8.731c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.27.667 1.27 1.489c0 .822-.569 1.489-1.27 1.489zm6 0c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.27.667 1.27 1.489c0 .822-.569 1.489-1.27 1.489zm6 0c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.271.667 1.271 1.489c-.001.822-.57 1.489-1.271 1.489zm6 0c-.702 0-1.271-.666-1.271-1.489c0-.822.569-1.489 1.271-1.489c.701 0 1.271.667 1.271 1.489c-.001.822-.57 1.489-1.271 1.489z"/><path fill="#66757F" d="M27.315.179c-1.277 0-2.383.802-2.994 1.97c-.606-1.143-1.717-1.97-3.006-1.97c-1.277 0-2.383.802-2.994 1.97c-.606-1.143-1.717-1.97-3.006-1.97c-1.277 0-2.383.802-2.994 1.97c-.606-1.143-1.717-1.97-3.006-1.97c-1.934 0-3.5 1.819-3.5 4.005c0 1.854 1.045 3.371 2.569 3.926c.759.275 1.224-.447 1.159-1.026c-.055-.48-.374-.793-.729-1.018c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095s1.5.905 1.5 1.905h1.016c-.003.062-.016.121-.016.184c0 1.854 1.045 3.371 2.569 3.926c.759.275 1.224-.447 1.159-1.026c-.055-.479-.374-.792-.729-1.017c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095S16.815 3 16.815 4h1.016c-.003.062-.016.121-.016.184c0 1.854 1.045 3.371 2.569 3.926c.759.275 1.224-.447 1.159-1.026c-.055-.479-.374-.792-.729-1.017c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095S22.815 3 22.815 4h1.016c-.003.062-.016.121-.016.184c0 1.854 1.045 3.371 2.569 3.926c.759.275 1.224-.447 1.159-1.026c-.055-.479-.374-.792-.729-1.017c-.485-.307-1-1.008-1-1.877c0-1.104.671-2.095 1.5-2.095S28.815 3 28.815 4h1.996C30.79 2 29.235.179 27.315.179z"/><path fill="#FFF" d="M11 15h4v4h-4zm5 0h4v4h-4zm5 0h4v4h-4zm5 0h4v4h-4zM6 20h4v4H6zm5 0h4v4h-4zm5 0h4v4h-4zm5 0h4v4h-4zm5 0h4v4h-4zM6 25h4v4H6zm5 0h4v4h-4zm5 0h4v4h-4zm5 0h4v4h-4zm5 0h4v4h-4zM6 30h4v4H6zm5 0h4v4h-4zm5 0h4v4h-4z"/></svg>
                    <input type="date" name="endDate" id="" placeholder="jj/mm/aaaa" class="lg:text-base w-full text-xs text-black/80 border-0 appearance-none outline-none ml-4" required>
                </div>
    
                <div class="flex">
                    <p class="font-fam4 font-bold text-lg mt-4">Objectif:</p>
                    <textarea class="w-full text-xs border-neutral-600 rounded-xl mt-4 items-center shadow-md shadow-black/40 p-2 text-black/80 border-0 appearance-none outline-none ml-4" required name="objectif" id="" cols="30" rows="2"></textarea>
                </div>
                <div class="flex justify-between mt-4">
                    <button type="submit" class="rounded-xl text-white bg-emerald-800 font-normal font-fam1 px-4 py-2">Add Mission</button>
                    <button type="reset" class="rounded-xl text-white bg-orange-800 font-normal font-fam1 px-4 py-2">Remove form</button>
                </div>
            </div>
        </div>
        <div>
            <h2 class="font-fam2 font-medium mt-4 text-sky-300">Mission List</h2>
            <div class="grid grid-cols-3 border rounded-xl p-4 gap-4 shadow shadow-gray-400">
                <div class="font-fam4 font-semibold mt-4">Mission Date</div>
                <div class="font-fam4 font-semibold mt-4">Objectif</div>
                <div class="text-center font-fam4 font-semibold mt-4">Action</div>
                <div class="text-sm font-medium font-fam1">Du 01/01/1998 au 12/09/1999</div>
                <div class="text-sm font-medium font-fam1">First objectif</div>
                <div class="flex justify-between">
                    <button type="submit" class="rounded-xl text-white bg-emerald-800 font-normal font-fam1 px-4 py-2">Edit</button>
                    <button type="reset" class="rounded-xl text-white bg-orange-800 font-normal font-fam1 px-4 py-2">Delete</button>
                </div>
                <hr> <hr> <hr>
                <div class="text-sm font-medium font-fam1">Du 01/01/1998 au 12/09/1999</div>
                <div class="text-sm font-medium font-fam1">Second objectif</div>
                <div class="flex justify-between">
                    <button type="submit" class="rounded-xl text-white bg-emerald-800 font-normal font-fam1 px-4 py-2">Edit</button>
                    <button type="reset" class="rounded-xl text-white bg-orange-800 font-normal font-fam1 px-4 py-2">Delete</button>
                </div>
                <hr> <hr> <hr>
                <div class="text-sm font-medium font-fam1">Du 01/01/1998 au 12/09/1999</div>
                <div class="text-sm font-medium font-fam1">Third objectif</div>
                <div class="flex justify-between">
                    <button type="submit" class="rounded-xl text-white bg-emerald-800 font-normal font-fam1 px-4 py-2">Edit</button>
                    <button type="reset" class="rounded-xl text-white bg-orange-800 font-normal font-fam1 px-4 py-2">Delete</button>
                </div>
            </div>
        </div>
    </div> -->
</template>

<style scoped>

</style>