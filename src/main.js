import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/base.css'
import store from './store'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import "../styles/styles.scss"



const app = createApp(App)

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDw0NPjap231ojwDZsxCanNK5jos6iLMuE',
        // language: 'de',
    },
})

app.use(router)
app.use(store)

app.mount('#app')