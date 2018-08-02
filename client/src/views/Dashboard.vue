<template lang="html">
  <div>
    <Navbar></Navbar>
    <div class="container" style="margin-top: 40px; margin-bottom: 40px">
      <b-collapse :open="false">
      <button class="button is-success" slot="trigger">Add new article</button>
      <div class="notification">
        <div class="content">

          <b-field label="Title">
            <b-input placeholder="This will be displayed at the very top" maxlength="30" minlength="1" v-model="title"></b-input>
          </b-field>

          <b-field label="Content">
            <b-input placeholder="Unleash your creativity!" maxlength="400" minlength="1" type="textarea" v-model="content"></b-input>
          </b-field>

          <b-field label="Category">
              <b-select placeholder="Select a category" required v-model="category">
                  <option value="Critics">Critics</option>
                  <option value="Opinions">Opinions</option>
                  <option value="Analysis">Analysis</option>
              </b-select>
          </b-field>

          <b-field label="Item Image">
            <b-field class="file" required native="true" accept="image/png, image/jpeg">
              <b-upload v-model="files">
                <a class="button is-primary">
                  <b-icon icon="upload"></b-icon>
                  <span>Click to upload</span>
                </a>
              </b-upload>
              <span class="file-name"
              v-if="files && files.length">
              {{ files[0].name }}
            </span>
          </b-field>
          </b-field>

          <a class="button is-success">
            <span @click="add">Publish Post</span>
          </a>

        </div>
      </div>
    </b-collapse>



      <h1 class="title">Your Articles</h1>
      <div class="columns is-multiline is-mobile" v-if="articlesData !== null">
        <div class="column is-one-quarter" v-for="(article, index) in articlesData" v-bind:key="index">
          <DashboardArticlesCard :articleDatum="article"></DashboardArticlesCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
// import UserAnswerCard from '../components/UserAnswerCard.vue';
import DashboardArticlesCard from '../components/DashboardArticlesCard.vue';
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import axios from 'axios'
import serverAddress from '../helpers/serverAddress'


export default {
  data() {
    return {
      articlesData: null,
      files: [],
      title: null,
      content: null,
      category: null,
    };
  },
  components: {
    Navbar,
    DashboardArticlesCard
  },
  computed: {
    ...mapState([ `userInfo` ]),
  },
  methods: {
    ...mapActions([ 'addNewArticle' ]),
    checkIsLoggedIn() {
      if (this.userInfo === null) {
        this.$router.push({
          name: 'home',
          query: {
            redirect: '/'
          }
        })
      }
    },
    getArticlesByAuthor() {
      let self = this;
      axios.get(`${serverAddress}/articles/author/${self.userInfo.userID}`)
      .then((response) => {
        this.articlesData = response.data;
      })
    },
    add() {
      if (this.files.length === 0 || this.title === null || this.content === null || this.category === null) {
        this.$toast.open({
          duration: 1000,
          message: 'Kindly enter all required fields',
          position: 'is-top',
          type: 'is-danger'
        });
      } else {
        this.addNewArticle({title: this.title, content: this.content, category: this.category, file: this.files[0]})
        .then(() => {
          this.$toast.open({
            duration: 1000,
            message: 'Successfully added item',
            position: 'is-top',
            type: 'is-success'
          });
        })
        .catch(() => {
          this.$toast.open({
            duration: 1000,
            message: 'Oops. something went wrong. Pleas try again.',
            position: 'is-top',
            type: 'is-danger'
          });
        })
      }
    },
  },
  created() {
    this.checkIsLoggedIn();
    this.getArticlesByAuthor();
  },
}
</script>

<style lang="css">
</style>
