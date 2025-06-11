import type { App } from 'vue'
import GenericForm from './components/GenericForm.vue'

export { GenericForm }

export default {
  install(app: App) {
    app.component('GenericForm', GenericForm)
  }
}
