import type { App } from 'vue'
import { VueAwesomePaginate } from './components/VueAwesomePaginate/index'

export default {
  install: (app: App) => {
    app.component('VueAwesomePaginate', VueAwesomePaginate)
  }
}

export { VueAwesomePaginate }
