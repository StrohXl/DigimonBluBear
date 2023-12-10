<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { dataDigimon } from '../stores/dataDigimon'
import CardDigimonVue from '@/components/CardDigimon.vue'
import { pageHome } from '@/stores/page'
import { useRouter } from 'vue-router'
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
    class="pb-10 bg-neutral-100 pt-10 px-5 sm:pt-5 sm:px-10 md:pt-8 md:px-20 lg:pt-10 lg:px-28 xl:px-36 2xl:px-64"
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

    <div class="flex justify-center mt-10">
      <vue-awesome-paginate
        :total-items="1422"
        :items-per-page="20"
        :max-pages-shown="3"
        v-model="page"
        :on-click="onClickHandler"
      />
    </div>
  </div>
</template>
