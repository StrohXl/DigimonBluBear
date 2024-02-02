<script lang="ts" setup>
import Field from '../../interface/listDigimonLevel'
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import GetListDigimonLevel from '../../services/getListDigimonLevel'
const data = ref()
const getDigimons = async () => {
  const list = await GetListDigimonLevel()
  if (list) {
    data.value = list
  }
}
onMounted(() => {
  getDigimons()
})
const openMenu = ref(false)
</script>
<template>
  <div @mouseenter="openMenu = true" @mouseleave="openMenu = false" class="relative">
    <div class="flex gap-1">Level</div>
    <div @mouseenter="openMenu = true" v-if="openMenu" class="absolute py-2 top-6 -right-10 bg-">
      <div
        class="rounded-md dark:text-white text-black py-1 mt-4 shadow-2xl border-gray-700 dark:bg-gray-800 bg-white"
      >
        <ul class="p-3">
          <li
            :class="`hover:bg-gray-200 py-1 rounded-sm font-medium px-3 w-52 ${
              ['Super Ultimate', 'Digitama'].includes(item.name) && ' hidden'
            }`"
            v-for="item in data"
            v-bind:key="item.id"
          >
            <RouterLink
              @click="openMenu = false"
              class="w-full block"
              :to="`/level/${item.name}`"
              >{{ item.name }}</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
