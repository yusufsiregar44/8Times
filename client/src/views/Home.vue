<template>
  <div class="home">
    <Navbar></Navbar>
    <b-tabs position="is-centered" class="block" @change="changeTab">
        <b-tab-item label="Critics"></b-tab-item>
        <b-tab-item label="Analysis"></b-tab-item>
        <b-tab-item label="Opinions"></b-tab-item>
    </b-tabs>

    <div class="columns is-multiline" style="margin:10px" v-if="tabIndex === 0">
      <ArticlesCard v-for="(article, index) in opinions" v-bind:key="index" :article="article"></ArticlesCard>
    </div>

    <div class="columns is-multiline" style="margin:10px" v-if="tabIndex === 1">
      <ArticlesCard v-for="(article, index) in analysis" v-bind:key="index" :article="article"></ArticlesCard>
    </div>

    <div class="columns is-multiline" style="margin:10px" v-if="tabIndex === 2">
      <ArticlesCard v-for="(article, index) in critics" v-bind:key="index" :article="article"></ArticlesCard>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import axios from 'axios'
import serverAddress from './helpers/serverAddress.js'

// import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    Navbar
  },
  data() {
    return {
        opinions: null,
        critics: null,
        analysis: null,
        tabIndex: 0,
    };
  },
  methods: {
    changeTab(e) {
      this.tabIndex = e;
    },
    getCritics() {
      let self = this;
      axios.get(`${serverAddress}/articles/category/critics`)
      .then((response) => {
        self.critics = response.data()
      })
    },
    getOpinions() {
      let self = this;
      axios.get(`${serverAddress}/articles/category/opinions`)
      .then((response) => {
        self.opinions = response.data()
      })
    },
    getAnalysis() {
      let self = this;
      axios.get(`${serverAddress}/articles/category/analysis`)
      .then((response) => {
        self.analysis = response.data()
      })
    },
  },
  created() {
    this.getAnalysis
    this.getCritics
    this.getOpinions
  }
}
</script>
