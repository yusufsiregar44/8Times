<template lang="html">
  <form action="">
    <div class="modal-card" style="width: 500px">
      <header class="modal-card-head">
        <p class="modal-card-title">Login</p>
      </header>
      <section class="modal-card-body">

        <UsernameField @input="updateUsername"></UsernameField>

        <PasswordField @input="updatePassword"></PasswordField>

      </section>
      <footer class="modal-card-foot">
        <div class="container">
          <button class="button is-success" @click="loginUser">Login</button>
        </div>
      </footer>
    </div>
  </form>

</template>

<script>
import UsernameField from '../components/UsernameField.vue'
import PasswordField from '../components/PasswordField.vue'
import serverAddress from '../helpers/serverAddress'
import axios from 'axios'

export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  components: {
    UsernameField,
    PasswordField,
  },
  methods: {
    // ...mapActions([ 'decodeToken' ]),
    updateUsername(e) {
      this.username = e;
    },
    updatePassword(e) {
      this.password = e;
    },
    loginUser() {
      axios.post(`${serverAddress}/users/login`, {
        username: this.username,
        password: this.password,
      })
      .then(() => {
        this.$toast.open({
          duration: 2500,
          message: 'Successfully logged in',
          position: 'is-top',
          type: 'is-success'
        });
        this.$parent.close();
      })
      .catch(() => {
        this.$toast.open({
          duration: 2500,
          message: 'Oops. something went wrong. Please enter a valid username/password',
          position: 'is-top',
          type: 'is-danger'
        });
      })
    }
  }
}
</script>

<style lang="css">
</style>
