import { defineStore } from 'pinia'

export const pageHome = defineStore('page', {
  state: () => ({
    page: 1
  }),
  actions: {
    updatePage(value: number) {
      this.page = value
    }
  }
})
