<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRoute()
const route = useRouter()
import IconMenu from './icons/IconMenu.vue'
import IconSearch from './icons/IconSearch.vue'
import IconClose from './icons/IconClose.vue'
import MenuLevel from './Menus/MenuLevel.vue'
import MenuAtrributes from './Menus/MenuAttribute.vue'
const openMenuMobile = ref(false)
const input = ref('')
const openSubmenuLevel = ref(false)
const openSubmenuAtrributes = ref(false)
const onChange = (event: any) => {
  if (event.target.value) {
    input.value = event.target.value
  }
}
const Buscar = () => {
  openMenuMobile.value = false
  if (input.value != '') {
    route.push(`/search/${input.value}`)
  }
}
const keyDown = (value: any) => {
  if (value.key == 'Enter') Buscar()
}
watch(
  () => router.params.id,
  (newValue) => (input.value = '')
)
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
      <div class="hidden md:flex items-center">
        <input
          placeholder="Buscar"
          class="py-1 w-52 lg:w-64 border-2 pl-3 rounded-l-2xl focus:border-black/20 pb-.5 text-black md:text-md outline-none focus:ring-0"
          type="text"
          :value="input"
          @input="onChange"
          @keydown="keyDown"
        />
        <div
          @click="Buscar"
          class="bg-white hover:bg-gray-100 h-full flex justify-center items-center px-6 py-2 rounded-r-2xl"
        >
          <IconSearch class="h-5 cursor-pointer" />
        </div>
      </div>
      <ul class="hidden font-bold md:flex gap-3 lg:gap-5 text-neutral-400 lg:text-lg">
        <li class="cursor-pointer hover:text-white">
          <RouterLink to="/" :class="router.path == '/' && ' text-white'"> Home </RouterLink>
        </li>
        <li class="cursor-pointer hover:text-white"><MenuAtrributes /></li>
        <li class="cursor-pointer hover:text-white"><MenuLevel /></li>
      </ul>
    </nav>
    <nav
      :class="` h-fit w-full absolute transition-all opacity-0 duration-500 justify-between -translate-y-96 md:hidden ${
        openMenuMobile && 'opacity-100 !translate-y-0'
      }`"
    >
      <div class="p-5 !transition-none backdrop-blur-sm bg-cyan-950/90">
        <div class="flex items-center">
          <input
          placeholder="Buscar"
          class="py-1 w-full lg:w-64 border-2 pl-3 rounded-l-2xl focus:border-black/20 pb-.5 text-black md:text-md outline-none focus:ring-0"
          type="text"
          :value="input"
          @input="onChange"
          @keydown="keyDown"
        />
          <div
            @click="Buscar"
            class="bg-white hover:bg-gray-100 h-full w-2/12 flex justify-center items-center px-3 py-2 rounded-r-2xl"
          >
            <IconSearch class="h-5 cursor-pointer" />
          </div>
        </div>
        <ul class="mt-10 grid gap-4 text-neutral-400 text-xl px-5">
          <li @click="openMenuMobile = false" class="cursor-pointer hover:text-white">
            <RouterLink to="/" :class="router.path == '/' && ' text-white'"> Home </RouterLink>
          </li>
          <li
            @click="(openSubmenuAtrributes = !openSubmenuAtrributes),(openSubmenuLevel = false)"
            class="cursor-pointer hover:text-white"
          >
            <div class="flex stroke-neutral-400 items-center">
              Attributes
              <svg
                :class="`w-7 h-7 transition-transform duration-300 mt-1 ${
                  openSubmenuAtrributes && 'rotate-180 stroke-white'
                }`"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 9.5L12 14.5L7 9.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <ul :class="`p-3 hidden ${openSubmenuAtrributes && '!grid'}`">
              <li
                class="hover:text-white text-neutral-400 py-1 rounded-sm font-medium px-3 w-52 false"
              >
                <a href="/attribute/Variable" class="w-full block">Variable</a>
              </li>
              <li
                class="hover:text-white text-neutral-400 py-1 rounded-sm font-medium px-3 w-52 false"
              >
                <a href="/attribute/Free" class="w-full block">Free</a>
              </li>
              <li
                class="hover:text-white text-neutral-400 py-1 rounded-sm font-medium px-3 w-52 false"
              >
                <a href="/attribute/Vaccine" class="w-full block">Vaccine</a>
              </li>
              <li
                class="hover:text-white text-neutral-400 py-1 rounded-sm font-medium px-3 w-52 false"
              >
                <a href="/attribute/Virus" class="w-full block">Virus</a>
              </li>
              <li
                class="hover:text-white text-neutral-400 py-1 rounded-sm font-medium px-3 w-52 false"
              >
                <a href="/attribute/Unknown" class="w-full block">Unknown</a>
              </li>
              <li
                class="hover:text-white text-neutral-400 py-1 rounded-sm font-medium px-3 w-52 false"
              >
                <a href="/attribute/Data" class="w-full block">Data</a>
              </li>
              <li
                class="hover:text-white text-neutral-400 py-1 rounded-sm font-medium px-3 w-52 false"
              >
                <a href="/attribute/No Data" class="w-full block">No Data</a>
              </li>
            </ul>
          </li>
          <li
            @click="(openSubmenuLevel = !openSubmenuLevel), (openSubmenuAtrributes = false)"
            class="cursor-pointer hover:text-white"
          >
            <div class="flex stroke-neutral-400 items-center">
              Level
              <svg
                :class="`w-7 h-7 transition-transform duration-300 mt-1 ${
                  openSubmenuLevel && 'rotate-180 stroke-white'
                }`"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 9.5L12 14.5L7 9.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <ul :class="`p-3 hidden ${openSubmenuLevel && '!grid'}`">
              <li
                class="hover:text-white py-1 rounded-sm text-neutral-400 font-medium px-3 w-52 false"
              >
                <a href="/level/Hybrid" class="w-full block">Hybrid</a>
              </li>
              <li
                class="hover:text-white py-1 rounded-sm text-neutral-400 font-medium px-3 w-52 false"
              >
                <a href="/level/Perfect" class="w-full block">Perfect</a>
              </li>
              <li
                class="hover:text-white py-1 rounded-sm text-neutral-400 font-medium px-3 w-52 false"
              >
                <a href="/level/Adult" class="w-full block">Adult</a>
              </li>
              <li
                class="hover:text-white py-1 rounded-sm text-neutral-400 font-medium px-3 w-52 false"
              >
                <a href="/level/Ultimate" class="w-full block">Ultimate</a>
              </li>
              <li
                class="hover:text-white py-1 rounded-sm text-neutral-400 font-medium px-3 w-52 false"
              >
                <a href="/level/Baby I" class="w-full block">Baby I</a>
              </li>
              <li
                class="hover:text-white py-1 rounded-sm text-neutral-400 font-medium px-3 w-52 false"
              >
                <a href="/level/Armor" class="w-full block">Armor</a>
              </li>
              <li
                class="hover:text-white py-1 rounded-sm text-neutral-400 font-medium px-3 w-52 false"
              >
                <a href="/level/Child" class="w-full block">Child</a>
              </li>
              <li
                class="hover:text-white py-1 rounded-sm text-neutral-400 font-medium px-3 w-52 false"
              >
                <a href="/level/Baby II" class="w-full block">Baby II</a>
              </li>
              <li
                class="hover:text-white py-1 rounded-sm text-neutral-400 font-medium px-3 w-52 false"
              >
                <a href="/level/Unknown" class="w-full block">Unknown</a>
              </li>
              <li
                class="hover:text-white py-1 rounded-sm text-neutral-400 font-medium px-3 w-52 hidden"
              >
                <a href="/level/Digitama" class="w-full block">Digitama</a>
              </li>
              <li
                class="hover:text-white py-1 rounded-sm text-neutral-400 font-medium px-3 w-52 hidden"
              >
                <a href="/level/Super Ultimate" class="w-full block">Super Ultimate</a>
              </li>
            </ul>
          </li>
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
