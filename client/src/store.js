import Vue from 'vue'
import Vuex from 'vuex'
import { config } from './helpers/firebaseConfig'
import * as firebase from 'firebase'
import axios from 'axios'
import serverAddress from './helpers/serverAddress'

firebase.initializeApp(config)

let firebaseStorage = firebase.storage()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
  },
  mutations: {
    assignUserInfo(state, payload) {
      return state.userInfo = payload;
    },
  },
  actions: {
    decodeToken({ commit }) {
      if (localStorage.token) {
        axios.get(`${serverAddress}/authentication`, {
            'headers': {
              'token': localStorage.token,
            },
          })
          .then((decoded) => {
            commit('assignUserInfo', ({username: decoded.data.username, userID: decoded.data._id}))
          })
      } else {
        // eslint-disable-next-line
        console.log('gamasuk');
      }
    },
  }
})
