<template>
<form action="">
  <div class="modal-card" style="width: 500px">
    <header class="modal-card-head">
      <p class="modal-card-title">Register</p>
    </header>
    <section class="modal-card-body">

      <UsernameField @input="updateUsername"></UsernameField>

      <PasswordField @input="updatePassword"></PasswordField>

    </section>
    <footer class="modal-card-foot">
      <div class="container">
        <button class="button is-success" @click="registerUser">Register</button>
      </div>
    </footer>
  </div>
</form>
</template>

<script>
import PasswordField from '../components/PasswordField.vue';
import UsernameField from '../components/UsernameField.vue';
import  serverAddress from '../helpers/serverAddress.js'
import axios from 'axios'

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  components: {
    PasswordField,
    UsernameField,
  },
  methods: {
    updatePassword(e) {
      this.password = e;
    },
    updateUsername(e) {
      this.username = e;
    },
    registerUser() {
      if (this.password.length < 8 || this.username.length < 8) {
        this.$toast.open({
          duration: 2500,
          message: 'Oops. something went wrong. Password and/or Username length must be at least 8 characters',
          position: 'is-top',
          type: 'is-danger'
        });
      } else {
        axios.post(`${serverAddress}/users/register`, {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$toast.open({
            duration: 2500,
            message: 'Successfully registered',
            position: 'is-top',
            type: 'is-success'
          });
          this.$parent.close();
        })
        .catch(() => {
          this.$toast.open({
            duration: 2500,
            message: 'Oops. something went wrong. Please use another username/email/password.',
            position: 'is-top',
            type: 'is-danger'
          });
        })
      }
    },
  },
}
</script>
