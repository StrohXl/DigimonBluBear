<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { dataDigimon } from '../stores/dataDigimon'
import CardDigimonId from '@/components/CardDigimonId.vue'
import NextEvolution from '@/components/NextEvolution.vue'
import PriorEvolution from '@/components/PriorEvolution.vue'

const router = useRoute()
const id = ref(router.params.id)
const loading = ref(true)
const limitPrior = ref(4)
const limitNext = ref(4)

const getDigimon = async () => {
  await dataDigimon().getDigimonId(Number(id.value))
  loading.value = false
}
onMounted(() => {
  getDigimon()
})

watch(
  () => router.params.id,
  (newValue) => {
    id.value = newValue
    getDigimon()
    limitPrior.value = 4
    limitNext.value = 4
  }
)
</script>
<template>
  <div
    class="rounded-md pt-10 mx-5 md:mx-6 lg:mx-14 xl:mx-20 lg:mt-5 xl:mt-8 2xl:mx-56 2xl:mt-32 bg-white pb-20 md:grid grid-cols-2 md:pt-14 text-neutral-700"
  >
    <h1 class="px-5 text-4xl hidden col-span-2 row-start-1 md:block lg:text-5xl lg:px-10">
      {{ dataDigimon().digimonId.name }}
    </h1>
    <CardDigimonId
      class="max-w-sm mx-auto col-start-2 row-start-2 md:w-5/6 md:mt-8 lg:mt-10"
      :loading="loading"
    />
    <div class="col-start-1 row-start-2 px-5 md:pl-5 md:pr-0 lg:pl-10 lg:pr-0">
      <h2
        class="my-10 pb-2 text-xl font-bold text-center md:text-left md:text-2xl md:my-8 md:border-b-2 md:mb-5 lg:text-3xl lg:my-8 lg:mb-6"
      >
        Description
      </h2>
      <template v-if="dataDigimon().digimonId?.descriptions?.length == 0">
        <p class="text-justify md:text-lg">We have no description about this Digimon</p>
      </template>
      <p
        class="text-justify md:text-lg lg:text-xl"
        v-for="item in dataDigimon().digimonId.descriptions"
        :key="item.language"
      >
        <template
          v-if="item.language === 'en_us' && dataDigimon().digimonId?.descriptions.length > 0"
        >
          {{ item.description }}
        </template>
      </p>
    </div>
    <div class="col-start-1 col-span-2 row-start-3 px-5 lg:px-10">
      <h2
        class="my-10 pb-3 text-center text-xl font-bold md:text-left md:text-2xl md:border-b-2 md:mb-5 lg:text-3xl lg:my-10 lg:mb-6"
      >
        Skills
      </h2>
      <ul class="grid gap-3 md:text-lg lg:text-xl">
        <li class="items-center pl-5" v-for="item in dataDigimon().digimonId.skills" :key="item.id">
          <p>
            <span class="font-bold">{{ item.skill }}: </span>
            <span>{{ item.description }}</span>
          </p>
        </li>
      </ul>
    </div>
    <PriorEvolution class="col-start-1 px-5 col-span-2 lg:px-10" />
    <NextEvolution class="col-start-1 px-5 col-span-2 lg:px-10" />
  </div>
</template>
