<template>
  <div class="antialiased">
    <nav class="w-full mx-auto my-0 px-12 py-16 justify-around flex flex-row">
      <NuxtLink to="/" class="text-2xl font-medium no-underline text-gray-800">Pramod Devireddy</NuxtLink>

      <ul class="flex flex-row justify-between">
        <NuxtLink v-for="(link, index) in links" :to="link.path" class="mx-10 group hover:text-primary-color">
          {{ link.text }}
          <span class="block mt-1.5 max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary-color"></span>
        </NuxtLink>

      </ul>

    </nav>
  </div>
  <NuxtPage />
</template>

<script setup>

const links = [
  { text: "Design", path: "/design" },
  { text: "Projects", path: "/projects" },
  { text: "Blog", path: "/blog" },
  { text: "About Me", path: "/about" }
]

</script>