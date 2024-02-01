<script setup lang="ts">
import { dataDigimon } from '../stores/dataDigimon'
import CardDigimonVue from '@/components/CardDigimon.vue'
import PaginationHome from '@/components/PaginationHome.vue'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { pageHome } from '../stores/page'

const router = useRoute()

watch(
  () => router.params.id,
  (newValue) => pageHome().updatePage(Number(newValue))
)
const dataDigimonStore = dataDigimon()
onMounted(async () => {
  await pageHome().updatePage(Number(router.params.id))
  dataDigimon().getDataDigimon()
})
</script>

<template>
  <div
    class="py-10  xl:mx-auto xl:max-w-6xl 2xl:max-w-7xl rounded-md px-5 sm:px-10 bg-white mx-5  md:px-12 lg:pt-10 lg:mx-14 "
  >
    <h1 class=" font-serif mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Digimons</h1>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  xl:grid-cols-5 2xl:grid-cols-6 justify-center gap-x-3 gap-y-5"
    >
      <CardDigimonVue
        v-for="item in dataDigimonStore.dataDigimon"
        :key="item.id"
        :urlImage="item.image"
        :name="item.name"
        :id="item.id"
      />
    </div>
    <PaginationHome />
  </div>
</template>
