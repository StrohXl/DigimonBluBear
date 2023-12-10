<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { dataDigimon } from '../stores/dataDigimon'
import CardDigimonVue from '@/components/CardDigimon.vue'
const dataDigimonStore = dataDigimon()

onMounted(() => {
  dataDigimonStore.getDataDigimon()
})
</script>

<template>
  <div
    class="bg-neutral-200 pt-10 px-5 sm:pt-5 sm:px-10 md:pt-8 md:px-20 lg:pt-10 lg:px-28 xl:px-36 2xl:px-64"
  >
    <h1 class="font-serif mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl">Digimons</h1>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-x-3 gap-y-5"
    >
      <CardDigimonVue
        v-for="item in dataDigimonStore.dataDigimon"
        :key="item.id"
        :urlImage="item.image"
        :name="item.name"
        :id="item.id"
      />
    </div>
  </div>
</template>
