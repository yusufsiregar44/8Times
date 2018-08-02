<template lang="html">
  <nav class="navbar is-transparent">
    <div class="container">
      <div class="navbar-brand">
        <router-link :to="`/`">
        <a class="navbar-item">
            <i class="fas fa-lightbulb" style="font-size:37px; margin-right:10px; color:#363636"></i>
            <h1 class="title">8Times</h1>
        </a>
      </router-link>
        <span class="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
        <span></span>
        <span></span>
        </span>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" v-if="userInfo === null">
            <a class="button is-inverted" @click="isLoginModalActive = true">
              <span class="icon">
                <i class="fas fa-sign-in-alt"></i>
              </span>
              <span>Login</span>
            </a>

            <b-modal :active.sync="isLoginModalActive" has-modal-card>
              <LoginModal></LoginModal>
            </b-modal>

            <p style="margin-right: 10px; margin-left: 10px;">or</p>

            <a class="button is-inverted" @click="isRegisterModalActive = true">
              <span class="icon">
                <i class="fas fa-registered"></i>
              </span>
              <span>Register</span>
            </a>

            <b-modal :active.sync="isRegisterModalActive" has-modal-card>
              <RegisterModal></RegisterModal>
            </b-modal>
          </a>

          <router-link :to="`/dashboard`">
            <a class="navbar-item" v-if="userInfo !== null">
              <a class="button is-inverted">
                <span class="icon">
                  <i class="fas fa-user"></i>
                </span>
                <span>{{ this.userInfo.username }}</span>
              </a>
            </a>
          </router-link>

          <a class="navbar-item" v-if="userInfo !== null">
             <a class="button is-inverted" @click="logout">
               <span class="icon">
                 <i class="fas fa-sign-out-alt"></i>
               </span>
               <span>Logout</span>
             </a>
          </a>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';
// import { mapActions } from 'vuex';
import RegisterModal from '../components/RegisterModal.vue'
import LoginModal from '../components/LoginModal.vue'


export default {

  components: {
    RegisterModal,
    LoginModal,
  },
  data() {
    return {
      username: null,
      password: null,
      isRegisterModalActive: false,
      isLoginModalActive: false,
    };
  },
  computed: {
    ...mapState([ 'userInfo' ])
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$store.commit('assignUserInfo', null);
      this.$toast.open({
          duration: 1000,
          message: 'Successfully logged out',
          position: 'is-top',
          type: 'is-success',
      });
      this.$router.push({ name: 'home', query: { redirect: '/' } })
    },
  },
}
</script>

<style lang="css">
</style>
