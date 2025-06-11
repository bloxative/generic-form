import { createApp } from 'vue'
import App from './App.vue'
import GenericFormPlugin from '../src'

const app = createApp(App)
app.use(GenericFormPlugin)
app.mount('#app')
