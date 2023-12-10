<script setup lang="ts">
import { dataDigimon } from '../stores/dataDigimon'
import { limitCards } from '../stores/limit'
import CardDigimon from './CardDigimon.vue'
</script>

<template>
  <div>
    <h2
      class="my-10 pb-3 text-center text-xl font-bold md:text-left md:text-2xl md:border-b-2 md:mb-5 lg:text-3xl lg:my-12 lg:mb-6"
      v-if="dataDigimon().digimonId?.nextEvolutions?.length > 0"
    >
      Next Evolutions
    </h2>
    <div class="grid gap-5 grid-cols-2 px-2.5 md:grid-cols-3">
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
        v-if="
          limitCards().limitNext < dataDigimon().digimonId?.nextEvolutions?.length &&
          limitCards().limitNext == 4
        "
        @click="limitCards().updateLimitNext(100)"
        class="text-sm uppercase hover:shadow-lg my-10 px-20 py-1.5 rounded-sm bg-slate-800 text-white"
      >
        See more
      </button>
    </div>
  </div>
</template>
