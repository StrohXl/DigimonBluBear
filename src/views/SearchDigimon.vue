<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { dataDigimon } from '../stores/dataDigimon'
import CardDigimonVue from '@/components/CardDigimon.vue'
import PaginationGlobal from '@/components/PaginationGlobal.vue'
import { pageHome } from '@/stores/page'
import { useRoute } from 'vue-router'
import 'vue-awesome-paginate/dist/style.css'
const dataDigimonStore = dataDigimon()
const params = useRoute()
watch(
  () => params.params.id,
  async (newValue) => {
    if (params.params.page == undefined) {
      await pageHome().updatePage(1)
    }
    dataDigimonStore.getDataDigimon(`name=${newValue}`)
  }
)
watch(
  () => params.params.page,
  async (newValue) => {
    if(newValue){
      await pageHome().updatePage(Number(newValue))
    }
    else{
      await pageHome().updatePage(1)

    }
    dataDigimonStore.getDataDigimon(`name=${params.params.id}`)
  }
)

onMounted(async () => {
  if (params.params.page) {
    await pageHome().updatePage(Number(params.params.page))
  } else {
    await pageHome().updatePage(1)
  }
  dataDigimonStore.getDataDigimon(`name=${params.params.id}`)
})
</script>

<template>
  <div
    class="pb-5 min-h-screen rounded-md px-5 xl:!mx-auto xl:max-w-6xl 2xl:max-w-7xl bg-white pt-5 mx-5 lg:px-10 sm:pt-5 md:pt-8 lg:mt-10 lg:pt-10 lg:mx-14"
  >
    <h1 class="font-serif mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
      Digimons {{ params.params.id }}
    </h1>
    <div
      v-if="dataDigimonStore.dataDigimon"
      :class="` grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-center gap-x-3 gap-y-5`"
    >
      <CardDigimonVue
        v-for="item in dataDigimonStore.dataDigimon"
        :key="item.id"
        :urlImage="item.image"
        :name="item.name"
        :id="item.id"
      />
    </div>
    <h2 class="md:text-lg" v-if="!dataDigimonStore.dataDigimon">Not Found</h2>

    <div
      :class="`flex justify-center mt-10 `"
    >
      <PaginationGlobal :itemPerPage="20" :totalItems="pageHome().totalItems" />
    </div>
  </div>
</template>
