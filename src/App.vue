<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavHeader from './components/NavHeader.vue'
</script>

<template>
  <header class="shadow-2xl p-3 sm:p-3 md:p-4 md:py-3 bg-cyan-950 text-gray-50">
    <NavHeader />
  </header>
  <main>
    <RouterView />
  </main>
  <footer class="bg-cyan-950 py-4 text-white">final</footer>
</template>
