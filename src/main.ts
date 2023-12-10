import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueAwesomePaginatePlugin from './VueAwesomePaginatePlugin'
import 'vue-awesome-paginate/dist/style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAwesomePaginatePlugin)

app.mount('#app')
document.title = 'DigimonWikiBlue'
