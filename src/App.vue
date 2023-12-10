<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="shadow-2xl p-3 sm:p-3 md:p-4 bg-cyan-950 text-gray-50">
    <nav class="flex justify-between items-center">
      <h1 class="cursor-pointer font-bold font-serif text-md sm:text-sm md:text-base lg:text-lg">
        <RouterLink to="/"> DigimonStore </RouterLink>
      </h1>
      <ul class="hidden md:flex">
        <li class="cursor-pointer">
          <RouterLink to="/"> Inicio </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer class="bg-cyan-950 py-4 text-white">final</footer>
</template>
