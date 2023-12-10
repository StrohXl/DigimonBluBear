<script setup lang="ts">
import NavHeader from './components/NavHeader.vue'
import FooterLayout from './components/FooterLayout.vue'
</script>

<template>
  <NavHeader />
  <main class="py-10">
    <RouterView />
  </main>
  <FooterLayout />
</template>
<style>
main {
  background: linear-gradient(#ffffff79 0%, #000000f3 30%),
    url('https://www.mundodeportivo.com/alfabeta/hero/2023/04/el-oscuro-secreto-para-la-digievolucion-ha-sido-revelado.jpg?width=1200&aspect_ratio=16:9') !important;

}
</style>
