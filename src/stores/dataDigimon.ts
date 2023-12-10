import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { Digimon, Digimons } from '@/interface/digimon.interface'

const url = 'https://digi-api.com/api/v1/digimon'
export const dataDigimon = defineStore('dataDigimon', {
  state: () => ({
    dataDigimon: [] as Digimons[],
    digimonId: {} as Digimon
  }),
  actions: {
    async getDataDigimon() {
      try {
        const {
          data: { content }
        } = await axios.get(url + '?page=0&pageSize=50')
        console.log(content)
        this.dataDigimon = content
      } catch (error) {
        console.log(error)
      }
    },
    async getDigimonId(id: number) {
      try {
        const { data } = await axios.get(url + `/${id}`)
        console.log(data)
        this.digimonId = data
      } catch (error) {
        console.log(error)
      }
    }
  }
})
