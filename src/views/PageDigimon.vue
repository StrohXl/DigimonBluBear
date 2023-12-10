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
    class="pb-10 bg-neutral-100 pt-10 px-5 sm:pt-5 sm:px-10 md:pt-8 md:px-20 lg:pt-10 lg:px-28 xl:px-36 2xl:px-64"
  >
    <h1 class="font-serif mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl">Digimons</h1>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 justify-center gap-x-3 gap-y-5"
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
