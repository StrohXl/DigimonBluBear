<template>
  <nav class="flex justify-between items-center">
    <h1 class="cursor-pointer font-bold font-serif text-sm sm:text-md md:text-base lg:text-lg">
      <RouterLink to="/"> DigimonStore </RouterLink>
    </h1>
    <IconMenu class="h-5 cursor-pointer md:hidden" />
    <ul class="hidden md:flex">
      <li class="cursor-pointer">
        <RouterLink to="/"> Inicio </RouterLink>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import IconMenu from './icons/IconMenu.vue'
</script>
