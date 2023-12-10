<script setup lang="ts">
import NavHeader from './components/NavHeader.vue'
import FooterLayout from './components/FooterLayout.vue'
</script>

<template>
  <NavHeader />
  <main class="bg-neutral-100 py-10">
    <RouterView />
  </main>
  <FooterLayout />
</template>
