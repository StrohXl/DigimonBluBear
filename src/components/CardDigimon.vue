<template>
  <RouterLink :to="`/digimon/${id}`">
    <div class="rounded-xl p-2 bg-white grid transition duration-500 hover:shadow-2xl">
      <img :src="urlImage" alt="" class="mx-auto w-auto h-40" />
      <h3 class="px-2 font-bold font-serif text-center mt-5 truncate text-sm md:text-md lg:text-lg">
        {{ name }}
      </h3>
    </div>
  </RouterLink>
</template>
<script lang="ts" setup>
defineProps({
  urlImage: String,
  name: String,
  id: Number
})
</script>
<style lang=""></style>
