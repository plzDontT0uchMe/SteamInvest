import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router/router.js'

const app = createApp(App)

const i18n = createI18n({
    // something vue-i18n options here ...
})

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')