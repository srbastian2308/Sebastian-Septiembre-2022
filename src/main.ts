import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap'
import App from '@/App.vue'
import router from '@/router'
import { tooltip } from '@/directives/tooltip'
import { popover } from '@/directives/popover'
import '@/plugins/bootstrap'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('tooltip', tooltip)
app.directive('popover', popover)
app.mount('#app')
