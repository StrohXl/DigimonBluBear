<template>
  <span class="ml-3" v-if="length === 1">
    {{ value }}
  </span>
  <span v-else >
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
