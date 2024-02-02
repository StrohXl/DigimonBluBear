<script setup lang="ts">
import { dataDigimon } from '../stores/dataDigimon'
import ComponentLi from '@/components/ComponentLi.vue'

defineProps({
  loading: Boolean
})
</script>
<template>
  <div class="bg-white border-2 rounded-md shadow-md grid-cols-1 grid gap-3">
    <h1 class="py-3 px-1 border-b-2 text-xl font-semibold text-center">
      {{ dataDigimon().digimonId.name }}
    </h1>
    <template v-if="!loading">
      <img class="mx-auto" :src="dataDigimon().digimonId.images[0].href" alt="" />
    </template>
    <template v-else>
      <div class="h-80"></div>
    </template>
    <h2 class="border-t-2 py-3 text-center text-lg font-semibold">Information</h2>
    <ul class="px-5 pb-5 text-md grid gap-2">
      <li class="flex gap-2">
        Level:
        <div class="flex gap-2 text-sm xl:text-base flex-wrap">
          <span
            class="font-semibold cursor-pointer border-2 transition-colors duration-400 hover:bg-white hover:text-cyan-950 border-cyan-950 bg-cyan-950 text-white rounded-md px-3"
            v-for="item in dataDigimon().digimonId.levels"
            :key="item.id"
          >
            <RouterLink :to="'/level/' + item.level"> {{ item.level }}</RouterLink>
          </span>
        </div>
      </li>
      <li>
        XAntibody:
        <span class="font-semibold pl-3">
          <template v-if="dataDigimon().digimonId.xAntibody === false"> Not </template>
          <template v-else>Yes</template>
        </span>
      </li>
      <li>
        Types:
        <span
          class="font-semibold"
          v-for="(item, index) in dataDigimon().digimonId.types"
          :key="item.id"
        >
          <ComponentLi
            :index="index"
            :length="dataDigimon().digimonId.types.length"
            :value="item.type"
          />
        </span>
      </li>
      <li class="flex gap-2">
        Attributes:
        <div class="flex gap-2 flex-wrap text-sm xl:text-base">
          <span
            class="font-semibold cursor-pointer border-2 transition-colors duration-400 hover:bg-white hover:text-cyan-950 border-cyan-950 bg-cyan-950 text-white rounded-md px-3"
            v-for="item in dataDigimon().digimonId.attributes"
            :key="item.id"
          >
            <RouterLink :to="'/attribute/' + item.attribute"> {{ item.attribute }}</RouterLink>
          </span>
        </div>
      </li>
      <li>
        Fields:
        <span
          class="font-semibold"
          v-for="(item, index) in dataDigimon().digimonId.fields"
          :key="item.id"
        >
          <ComponentLi
            :index="index"
            :length="dataDigimon().digimonId.fields.length"
            :value="item.field"
          />
        </span>
      </li>
    </ul>
  </div>
</template>
