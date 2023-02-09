import { createApp } from 'vue'
import App from './App.vue'
import { vMaska } from "maska"
import moment from 'moment'

// createApp(App).mount('#app')
const app = createApp(App)
app.directive( "maska", vMaska) // directive ou use aqui e distribuida para viu.js de forma de pugin
app.config.globalProperties.$moment = moment // aqui e propriedade global foi criado de javascript de forma generica ai passo com propriedade
app.config.globalProperties.$moment.locale('pt-br')
app.mount('#app')