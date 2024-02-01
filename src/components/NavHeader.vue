<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const router = useRoute()
import IconMenu from './icons/IconMenu.vue'
import IconSearch from './icons/IconSearch.vue'
import IconClose from './icons/IconClose.vue'
import MenuLevel from './Menus/MenuLevel.vue';
const openMenuMobile = ref(false)
</script>
<template>
  <header class="fixed w-full shadow-2xl bg-cyan-950/90">
    <nav
      class="relative backdrop-blur-sm px-5 z-10 flex border-b-2 border-cyan-900 justify-between items-center p-3 md:px-6 md:py-3 lg:px-14 xl:mx-auto xl:max-w-6xl 2xl:max-w-7xl text-gray-50 xl:px-0"
    >
      <h1 class="cursor-pointer font-extrabold font-serif text-lg lg:text-2xl">
        <RouterLink to="/"> DigimonWikiBlue </RouterLink>
      </h1>
      <IconMenu
        v-if="!openMenuMobile"
        @click="openMenuMobile = !openMenuMobile"
        class="h-6 w-6 cursor-pointer md:hidden"
      />
      <IconClose
        v-if="openMenuMobile"
        @click="openMenuMobile = !openMenuMobile"
        class="h-6 w-6 cursor-pointer md:hidden"
      />
      <div class="hidden md:flex w-52 bg-white rounded-2xl px-4 py-1.5 gap-3 lg:w-80 items-center">
        <IconSearch class="h-5 cursor-pointer" />
        <input
          class="w-10/12 pb-.5 text-black border-b md:text-md lg:text-lg border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-0"
          type="text"
        />
      </div>
      <ul class="hidden font-bold md:flex gap-3 lg:gap-5 text-neutral-400 lg:text-lg">
        <li class="cursor-pointer hover:text-white">
          <RouterLink to="/" :class="router.path == '/' && ' text-white'"> Home </RouterLink>
        </li>
        <li class="cursor-pointer hover:text-white">Types</li>
        <li class="cursor-pointer hover:text-white">Attributes</li>
        <li class="cursor-pointer hover:text-white">Fiels</li>
        <li class="cursor-pointer hover:text-white"><MenuLevel/></li>
      </ul>
    </nav>
    <nav
      :class="` h-fit w-full absolute transition-all opacity-0 duration-500 justify-between -translate-y-96 md:hidden ${
        openMenuMobile && 'opacity-100 !translate-y-0'
      }`"
    >
      <div class="p-5 !transition-none backdrop-blur-sm bg-cyan-950/90">
        <div
          class="flex bg-white rounded-2xl text-lg my-5 px-4 mx-5 py-1.5 gap-3 items-center h-12"
        >
          <IconSearch class="h-6 lg:h-7 xl:h-8 cursor-pointer" />
          <input
            class="w-10/12 pb-.5 text-black border-b md:text-md lg:text-lg xl:text-xl border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-0"
            type="text"
          />
        </div>
        <ul class="mt-10 grid gap-4 text-neutral-400 text-xl px-5">
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
      </div>
      <div
        @click="openMenuMobile = false"
        v-if="openMenuMobile"
        class="h-screen bg-transparent"
      ></div>
    </nav>
  </header>
</template>
<style></style>
