import { defineStore } from 'pinia'
import axios from 'axios'
import type { Digimon, Digimons } from '@/interface/digimon.interface'
import { pageHome } from './page'
const url = 'https://digi-api.com/api/v1/digimon'
export const dataDigimon = defineStore('dataDigimon', {
  state: () => ({
    dataDigimon: [] as Digimons[],
    digimonId: {} as Digimon
  }),
  actions: {
    async getDataDigimon() {
      try {
        const { data } = await axios.get(url + `?page=${pageHome().page - 1}&pageSize=20`)
        this.dataDigimon = data.content
      } catch (error) {
        console.log(error)
      }
    },
    async getDigimonId(id: number) {
      try {
        const { data } = await axios.get(url + `/${id}`)
        this.digimonId = data
      } catch (error) {
        console.log(error)
      }
    }
  }
})
