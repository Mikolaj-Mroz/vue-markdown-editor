import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdi',
    aliases,
    defaultSet: 'mdi',
    sets: {
      mdi
    }
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)

app.mount('#app')
