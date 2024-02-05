import '@fontsource/montserrat'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

/* Importo la libreria generica */
import { library } from '@fortawesome/fontawesome-svg-core'

/* Importo il componente di Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* Importo l'icona che voglio usare */
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

/* Icone da caricare */
library.add(faMagnifyingGlass);


const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
