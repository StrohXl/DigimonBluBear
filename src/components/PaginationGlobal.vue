<script setup lang="ts">
import { dataDigimon } from '../stores/dataDigimon'
import { pageHome } from '../stores/page'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
defineProps(['totalItems', 'itemPerPage', 'epale'])
const router = useRouter()
const route = useRoute()
const onClickHandler = (page: number) => {
  const path = route.path.split('/')
  pageHome().updatePage(page)
  dataDigimon().getDataDigimon()
  router.push(`/${path[1]}/${path[2]}/${page}`)
}
</script>

<template>
  <div class="flex justify-center mt-10">
    <vue-awesome-paginate
      :total-items="totalItems"
      :items-per-page="itemPerPage"
      :max-pages-shown="4"
      v-model="pageHome().page"
      :on-click="onClickHandler"
      :show-breakpoint-buttons="false"
      :hide-prev-next-when-ends="true"
    />
  </div>
</template>
<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
