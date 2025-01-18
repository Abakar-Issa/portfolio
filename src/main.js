import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import emailjs from 'emailjs-com';

import App from './App.vue'
import router from './router'
import './assets/main.css'

// Initialisez EmailJS avec votre User ID
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light'
  }
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
