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
    userInfo: null,
  },
  mutations: {

  },
  actions: {
    decodeToken({ commit }) {
      if (localStorage.token) {
        axios.get('http://35.240.188.49/authentication', {
            'headers': {
              'token': localStorage.token,
            },
          })
          .then((decoded) => {
            commit('assignUsername', decoded.data.name)
            commit('assignUserID', decoded.data._id)
            if (decoded.data.role === 'writer') {
                          // eslint-disable-next-line
              console.log('masuk');
              commit('assignWriterIsLoggedIn', true)
              router.push({
                name: 'writer',
                query: {
                  redirect: '/writer'
                }
              });
            } else {
              commit('assignReaderIsLoggedIn', true)
            }
          })
          .catch((err) => {
            // eslint-disable-next-line
            console.log(err);
          });
      } else {
        // eslint-disable-next-line
        console.log('gamasuk');
      }
    },
  }
})
