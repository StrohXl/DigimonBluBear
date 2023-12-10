<script setup lang="ts">
import { dataDigimon } from '../stores/dataDigimon'
import { pageHome } from '../stores/page'
import { useRouter } from 'vue-router'

const router = useRouter()
const onClickHandler = (page: number) => {
  pageHome().updatePage(page)
  dataDigimon().getDataDigimon()
  router.push(`/page/${page}`)
}
</script>

<template>
  <div class="flex justify-center mt-10">
    <vue-awesome-paginate
      :total-items="1422"
      :items-per-page="20"
      :max-pages-shown="3"
      v-model="pageHome().page"
      :on-click="onClickHandler"
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
