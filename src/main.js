import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

//fireBASE!
 var firebaseConfig = {
  apiKey: "AIzaSyBJK-vuaYxkXHcfbtpS1pnoVPqZB3BPKTk",
  authDomain: "fifi-881c3.firebaseapp.com",
  databaseURL: "https://fifi-881c3.firebaseio.com",
  projectId: "fifi-881c3",
  storageBucket: "fifi-881c3.appspot.com",
  messagingSenderId: "946634759140",
  appId: "1:946634759140:web:a28ddfe7cfaa7d7ea405f1"
};
  // INICIANDO  Firebase
  firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
