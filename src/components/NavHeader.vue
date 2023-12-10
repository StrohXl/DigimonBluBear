<script setup lang="ts">
import { useRoute } from 'vue-router'
const router = useRoute()
import IconMenu from './icons/IconMenu.vue'
import IconSearch from './icons/IconSearch.vue'
</script>
<template>
  <nav class="flex justify-between items-center">
    <h1 class="cursor-pointer font-bold font-serif text-sm sm:text-md md:text-base lg:text-lg">
      <RouterLink to="/"> DigimonStore </RouterLink>
    </h1>
    <IconMenu class="h-5 cursor-pointer md:hidden" />
    <div class="hidden md:flex bg-white rounded-xl px-3 py-1 gap-1">
      <IconSearch class="h-6" />
      <input class="pl-2 text-black border-blue-100 border-b-2" type="text" />
    </div>
    <ul class="hidden md:flex gap-3 text-neutral-400">
      <li class="cursor-pointer">
        <RouterLink to="/" :class="router.path == '/' && ' text-white'"> Home </RouterLink>
      </li>
      <li class="cursor-pointer">Types</li>
      <li class="cursor-pointer">Attributes</li>
      <li class="cursor-pointer">Fiels</li>
      <li class="cursor-pointer">Level</li>
    </ul>
  </nav>
</template>
