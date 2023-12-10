<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const router = useRoute()
import IconMenu from './icons/IconMenu.vue'
import IconSearch from './icons/IconSearch.vue'
import IconClose from './icons/IconClose.vue'
const openMenuMobile = ref(false)
</script>
<template>
  <header
    class="shadow-2xl p-3 sm:p-3 md:p-4 md:py-3 lg:px-14 lg:py-4 xl:py-5 bg-cyan-950 xl:px-20 text-gray-50 2xl:px-56"
  >
    <nav class="flex justify-between items-center">
      <h1 class="cursor-pointer font-bold font-serif text-lg md:text-xl lg:text-2xl xl:text-3xl">
        <RouterLink to="/"> DigimonWikiBlue </RouterLink>
      </h1>
      <IconMenu @click="openMenuMobile = !openMenuMobile" class="h-6 cursor-pointer md:hidden" />
      <div
        class="hidden md:flex bg-white rounded-2xl px-4 py-1.5 gap-3 lg:w-80 xl:w-96 items-center"
      >
        <IconSearch class="h-6 lg:h-7 xl:h-8 cursor-pointer" />
        <input
          class="w-10/12 pb-.5 text-black border-b md:text-md lg:text-lg xl:text-xl border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-0"
          type="text"
        />
      </div>
      <ul
        class="hidden md:flex gap-3 lg:gap-5 xl:gap-7 text-neutral-400 lg:text-lg xl:text-xl 2xl:"
      >
        <li class="cursor-pointer hover:text-white">
          <RouterLink to="/" :class="router.path == '/' && ' text-white'"> Home </RouterLink>
        </li>
        <li class="cursor-pointer hover:text-white">Types</li>
        <li class="cursor-pointer hover:text-white">Attributes</li>
        <li class="cursor-pointer hover:text-white">Fiels</li>
        <li class="cursor-pointer hover:text-white">Level</li>
      </ul>
    </nav>
    <template v-if="openMenuMobile">
      <nav class="p-5 absolute bg-cyan-950 justify-between menuMobile">
        <div class="flex justify-between items-center h-20 pr-5">
          <h1 @click="openMenuMobile = false" class="cursor-pointer font-bold font-serif text-xl">
            <RouterLink to="/"> DigimonWikiBlue </RouterLink>
          </h1>
          <IconClose @click="openMenuMobile = false" class="h-6 cursor-pointer md:hidden" />
        </div>
        <div
          class="flex bg-white rounded-2xl text-lg my-5 px-4 mx-5 py-1.5 gap-3 items-center h-12"
        >
          <IconSearch class="h-6 lg:h-7 xl:h-8 cursor-pointer" />
          <input
            class="w-10/12 pb-.5 text-black border-b md:text-md lg:text-lg xl:text-xl border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-0"
            type="text"
          />
        </div>
        <ul class="mt-20 grid gap-10 text-neutral-400 text-xl px-5">
          <li @click="openMenuMobile = false" class="cursor-pointer hover:text-white">
            <RouterLink to="/" :class="router.path == '/' && ' text-white'"> Home </RouterLink>
          </li>
          <li @click="openMenuMobile = false" class="cursor-pointer hover:text-white">Types</li>
          <li @click="openMenuMobile = false" class="cursor-pointer hover:text-white">
            Attributes
          </li>
          <li @click="openMenuMobile = false" class="cursor-pointer hover:text-white">Fiels</li>
          <li @click="openMenuMobile = false" class="cursor-pointer hover:text-white">Level</li>
        </ul>
      </nav>
    </template>
  </header>
</template>
<style>
.menuMobile {
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
}
</style>
