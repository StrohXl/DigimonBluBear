<template>
  <span class="pl-3" v-if="length === 1">
    {{ value }}
  </span>
  <span v-else :class="`px-3 ${index + 1 === length ? ' border-r-0' : 'border-r-2'}`">
    {{ value }}
  </span>
</template>
<script lang="ts" setup>
defineProps({
  value: String,
  index: {
    default: 0,
    type: Number
  },
  length: Number
})
</script>
