import { defineStore } from 'pinia'

export const pageHome = defineStore('page', {
  state: () => ({
    page: 1,
    totalItems: 100,
  }),
  actions: {
    updatePage(value: number) {
   
      this.page = value
    },
    updateTotalItems(value: number) {
      this.totalItems = value
    }
  }
})
