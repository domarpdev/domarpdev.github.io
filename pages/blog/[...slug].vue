<template>
    <div>

        <div>{{ blog.title }}</div>

        <div>{{ blog.author }}</div>

    </div>
</template>


<script setup>

const { path } = useRoute()

const { data: blog } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
})

</script>