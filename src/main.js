import { createApp } from 'vue'
import App from './App.vue'

/* import normalize.css file */
import "normalize.css"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faAt, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */

library.add(faTwitter, faDiscord, faAt, faPlay , faPause)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
