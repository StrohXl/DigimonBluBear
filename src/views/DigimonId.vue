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
  <div class="pt-10 px-5 bg-neutral-100 pb-20">
    <CardDigimonId :loading="loading" />
    <h2 class="py-10 text-center text-xl font-semibold">Description</h2>
    <template v-if="dataDigimon().digimonId?.descriptions?.length == 0">
      <p class="text-justify">We have no description about this Digimon</p>
    </template>
    <p
      class="text-justify"
      v-for="item in dataDigimon().digimonId.descriptions"
      :key="item.language"
    >
      <template v-if="item.language === 'en_us'">
        {{ item.description }}
      </template>
      <template v-else> We have no description about this Digimon</template>
    </p>
    <h2 class="py-10 text-center text-xl font-semibold">Skills</h2>
    <ul class="grid gap-3">
      <li v-for="item in dataDigimon().digimonId.skills" :key="item.id">
        <h3 class="text-lg font-semibold mb-2">{{ item.skill }}:</h3>
        <p>{{ item.description }}</p>
      </li>
    </ul>
    <PriorEvolution />
    <NextEvolution />
  </div>
</template>
