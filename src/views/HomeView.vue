<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { dataDigimon } from '../stores/dataDigimon'
import CardDigimonVue from '@/components/CardDigimon.vue'
import { pageHome } from '@/stores/page'
import { useRouter } from 'vue-router'
import 'vue-awesome-paginate/dist/style.css'
const dataDigimonStore = dataDigimon()
const router = useRouter()
const page = ref(1)
const onClickHandler = (value: number) => {
  router.push(`/page/${value}`)
  pageHome().updatePage(value - 1)
}
onMounted(async () => {
  await pageHome().updatePage(1)
  dataDigimonStore.getDataDigimon()
})
</script>

<template>
  <div
    class="pb-5 rounded-md px-5 xl:!mx-auto xl:max-w-6xl 2xl:max-w-7xl bg-white pt-5 mx-5 lg:px-10 sm:pt-5 md:pt-8 lg:mt-10 lg:pt-10 lg:mx-14"
  >
    <h1 class="font-serif mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Digimons</h1>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-center gap-x-3 gap-y-5"
    >
      <CardDigimonVue
        v-for="item in dataDigimonStore.dataDigimon"
        :key="item.id"
        :urlImage="item.image"
        :name="item.name"
        :id="item.id"
      />
    </div>

    <div class="flex justify-center mt-10">
      <vue-awesome-paginate
        :total-items="pageHome().totalItems"
        :items-per-page="20"
        :max-pages-shown="3"
        v-model="page"
        :on-click="onClickHandler"
        :show-breakpoint-buttons="false"
        :hide-prev-next-when-ends="true"
      />
    </div>
  </div>
</template>
