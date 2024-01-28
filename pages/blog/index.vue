<template>
    <div>
        <div class="text-3xl flex justify-center my-10">Blogs</div>

        <div class="flex flex-wrap justify-around">
            <NuxtLink v-for="blog in blogs" :key="blog._path" :to="blog._path" class="rounded-md w-96 h-72 shadow-md">
                <img class="rounded-t-md" :src="blog.img" alt="">
                <div class="px-2 py-2">{{ blog.title }}</div>
            </NuxtLink>
        </div>


    </div>
</template>
  
<script setup>
const { data: blogs } = await useAsyncData('blogs', () => queryContent('/').find())
</script>
  
