import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store.js'
import * as firebase from './firebaseConfig.js'
import './assets/scss/app.scss'

Vue.config.productionTip = false

// handle page reloads
let app
firebase.auth.onAuthStateChanged(user => {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            store,
            render: h => h(App)
        })
    }
})