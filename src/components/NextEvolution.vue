<script setup lang="ts">
import { dataDigimon } from '../stores/dataDigimon'
import { limitCards } from '../stores/limit'
import { onMounted } from 'vue'
import CardDigimon from './CardDigimon.vue'
onMounted(() => {
  limitCards().updateLimitNext(4)
})
</script>

<template>
  <div>
    <h2
      class="my-10 mb-8 pb-3 text-xl font-bold md:text-2xl border-b-2 lg:text-3xl lg:my-12 lg:mb-6"
      v-if="dataDigimon().digimonId?.nextEvolutions?.length > 0"
    >
      Next Evolutions
    </h2>
    <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="(item, index) in dataDigimon().digimonId.nextEvolutions"
        :key="item.id"
        :class="index > 6 && ` hidden`"
      >
        <template v-if="index < limitCards().limitNext">
          <CardDigimon :urlImage="item.image" :name="item.digimon" :id="item.id" />
        </template>
      </div>
    </div>
    <div class="grid justify-center">
      <button
        v-if="limitCards().limitNext == 4 && dataDigimon().digimonId.nextEvolutions.length > 4"
        @click="limitCards().updateLimitNext(100)"
        class="text-sm 2xl:text-base hover:shadow-lg my-10 px-20 py-1.5 rounded-md font-bold bg-slate-800 text-white"
      >
        See more
      </button>
      <button
        v-if="limitCards().limitNext == 100"
        @click="limitCards().updateLimitNext(4)"
        class="text-sm 2xl:text-base hover:shadow-lg my-10 px-20 py-1.5 rounded-md font-bold bg-slate-800 text-white"
      >
        See less
      </button>
    </div>
  </div>
</template>
