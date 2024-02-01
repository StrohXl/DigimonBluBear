<script lang="ts" setup>
import { ref } from 'vue'
defineProps(['openMenu'])
</script>
<template>
  <div :class="`absolute hidden ${openMenu && 'grid'}`"><slot /></div>
</template>
