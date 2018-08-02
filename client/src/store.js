import Vue from 'vue'
import Vuex from 'vuex'
import { config } from './helpers/firebaseConfig'
import * as firebase from 'firebase'
import axios from 'axios'

firebase.initializeApp(config)

let firebaseStorage = firebase.storage()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
