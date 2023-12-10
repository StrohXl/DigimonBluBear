import { defineStore } from 'pinia'

export const limitCards = defineStore('limit', {
  state: () => ({
    limitPrior: 4,
    limitNext: 4
  }),
  actions: {
    updateLimitPrior(value: number) {
      this.limitPrior = value
    },
    updateLimitNext(value: number) {
      this.limitNext = value
    }
  }
})
