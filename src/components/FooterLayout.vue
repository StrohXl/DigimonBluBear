<template>
  <footer class="bg-cyan-950 py-4 text-white grid px-5">
    <h2 class="text-center text-2xl py-2 font-semibold">DigimonWikiBlue</h2>
    <ul class="grid gap-2 text-center text-lg my-8 text-neutral-400 sm:flex justify-center">
      <li class="cursor-pointer hover:text-white">
        <RouterLink to="/" :class="router.path == '/' && ' text-white'"> Home </RouterLink>
      </li>
      <li class="cursor-pointer hover:text-white">Types</li>
      <li class="cursor-pointer hover:text-white">Attributes</li>
      <li class="cursor-pointer hover:text-white">Fiels</li>
      <li class="cursor-pointer hover:text-white">Level</li>
    </ul>
    <p class="mt-5 text-center text-sm">2023 — DigimonWikiBlue Created for Xavier Mayora</p>
  </footer>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router'
const router = useRoute()
</script>
